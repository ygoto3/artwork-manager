# Ansible Usage

Use Ansible to set up a server

## Edit hosts file

Edit the hosts file to specify the server IP and port

## Run ansible-playbook

```sh
ansible-playbook -i hosts centos.yaml
```

## Development

### Test centos.yaml with Docker

Run a docker container based on CentOS

```sh
$ docker pull centos:latest
$ docker run --privileged --name=artwork-centos -p 2022:22 -d centos:latest /sbin/init
```

Execute sh in the container

```sh
$ docker exec -it artwork-centos /bin/sh
```

Then install OpenSSH and restart sshd

```sh
$ yum install openssh openssh-server
$ systemctl restart sshd.service
```

Change root's password to `ansible` and exit from the container

```sh
$ echo "root:ansible" | chpasswd
$ exit
```

Run ansible-playbook

```sh
ansible-playbook -i hosts -k centos.yaml
```

When asked the password, enter `ansible`
