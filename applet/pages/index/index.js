import io from '/library/myapp-socket-io/index';

const socket = io('http://localhost:8888', {
  autoConnect: false
});

Page({
  data: {
    statuts: '',
    message: '',
  },
  onLoad() {
    socket.on('connect', () => {
      this.setData({statuts: 'connected'});
    });
    socket.on('disconnect', () => {
      this.setData({statuts: 'disconnected'});
    });
    socket.on('connect_error', (error) => {
      this.setData({statuts: 'connect error'});
      console.log(error);
    });
    socket.emit('hi', 'hello');
    socket.on('say', (message) => {
      this.setData({message: message});
    });
  },
  onTapConnect() {
    socket.connect();
    socket.emit('hi', 'hello');
  },
  onTapDisconnect() {
    socket.disconnect();
    this.setData({message: ''});
  },
});
