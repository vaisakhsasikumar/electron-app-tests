import net from 'node:net';

describe('External health check', () => {
    it('should return up state', async () => {
        function isMongoDBRunning(host = '127.0.0.1', port = 27017) {
            return new Promise((resolve) => {
              const socket = new net.Socket();
              
              const onError = () => {
                socket.destroy();
                resolve(false);
              };
          
              socket.setTimeout(1000);
              socket.once('error', onError);
              socket.once('timeout', onError);
          
              socket.connect(port, host, () => {
                socket.end();
                resolve(true);
              });
            });
          }
        
         ;
        expect(await isMongoDBRunning()).toBe(true);
    })
})