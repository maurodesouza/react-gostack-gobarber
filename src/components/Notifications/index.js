import React, { useState, useEffect, useMemo } from 'react';
import { MdNotifications } from 'react-icons/md';
import { parseISO, formatDistance } from 'date-fns';
import pt from 'date-fns/locale/pt-BR';

import api from '~/services/api';

import {
  Container,
  Badge,
  NotificationList,
  Scroll,
  Notification,
} from './styles';

export default function Notifications() {
  const [visible, setVisible] = useState(false);
  const [notifications, setNotifications] = useState([]);

  const hasUnread = useMemo(
    () => !!notifications.find(({ read }) => read === false),
    [notifications]
  );

  const toggleVisibity = () => setVisible(!visible);

  const markAsRead = async id => {
    await api.put(`/notifications/${id}`);

    setNotifications(
      notifications.map(notification =>
        notification._id === id ? { ...notification, read: true } : notification
      )
    );
  };

  useEffect(() => {
    const loadNotifications = async () => {
      const response = await api.get('/notifications');

      const data = response.data.map(notification => ({
        ...notification,
        formatDistance: formatDistance(
          parseISO(notification.createdAt),
          new Date(),
          { addSuffix: true, locale: pt }
        ),
      }));

      setNotifications(data);
    };

    loadNotifications();
  }, []);

  return (
    <Container>
      <Badge onClick={toggleVisibity} hasUnread={hasUnread}>
        <MdNotifications color="#7159c1" size={20} />
      </Badge>

      <NotificationList visible={visible}>
        <Scroll>
          {notifications.map(notification => (
            <Notification unread={!notification.read}>
              <p>{notification.content}</p>
              <time>{notification.formatDistance}</time>
              {!notification.read && (
                <button
                  onClick={() => markAsRead(notification._id)}
                  type="button"
                >
                  Marcar como lida
                </button>
              )}
            </Notification>
          ))}
        </Scroll>
      </NotificationList>
    </Container>
  );
}
