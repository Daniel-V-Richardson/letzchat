import Pusher from "pusher"
import ClientPusher from "pusher-js"

export const serverPusher = new Pusher({
    appId: "1528320",
    key: "06ccf131b0b40f1b28a5",
    secret: "0d78704511d4503e55cd",
    cluster: "ap2",
    useTLS: true

});

export const clientPusher = new ClientPusher('06ccf131b0b40f1b28a5', {
    cluster: 'ap2',
    forceTLS: true,
});