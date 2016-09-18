cd infrastructure
packer build distro
packer build db
packer build app
docker-compose up
