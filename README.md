## Easyrtc with local domain + HTTPS
1. Build the open-easyrtc image by running:
```
docker build -t <image_name> .
Example:
sudo docker build -t easyrtc-local:0.0.1 .
```

2. Run the docker compose 
```
sudo docker compose -f docker-compose-easyrtc.yml up -d
```

3. Update host file
- Linux:
Using vim or nano to add records to the /etc/hosts
```
sudo nano /etc/hosts

Add the following records

127.0.0.1 easyrtc.local
127.0.0.1 traefik.easyrtc.local

!!!Remember to save the changes!!!

```

Дальше:
```
sudo docker network create webrtc
sudo docker compose -f docker-compose-easyrtc.yml up -d
```

Чтобы остановить докер контейнер:
```
sudo docker compose -f docker-compose-easyrtc.yml down -v
```

- Windows:
Follow the instructions as described in this link: https://docs.rackspace.com/docs/modify-your-hosts-file

- MacOS:
Follow the instructions as described in this link: https://phoenixnap.com/kb/mac-hosts-file

4. Access the easyrtc demos via browser.
**!!!Note: you have to manually type https:// and the name of the easyrtc domain in order to visit that website!!!**
https://easyrtc.local
