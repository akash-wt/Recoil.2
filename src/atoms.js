import { atom, selector } from "recoil";
import axios from "axios";


export const notificationsSelector = selector({
    key: "notificationsSelector",
    get: async () => {
        try {
            const response = await axios.get("https://sum-server.100xdevs.com/notifications");
            return response.data;
        } catch (error) {
            console.error("Error fetching notifications:", error);
            return {
                networks: 0,
                jobs: 0,
                notifications: 0,
                messaging: 0,
            };
        }
    },
});


export const notifications = atom({
    key: "notifications",
    default: notificationsSelector,
});


export const totalNotificationSelector = selector({
    key: "totalNotificationSelector",
    get: ({ get }) => {
        const allNotifications = get(notifications);
        return allNotifications.networks +
            allNotifications.jobs +
            allNotifications.notifications +
            allNotifications.messaging
    }
})