#!/bin/sh

packer build infrastructure/distro.json
packer build infrastructure/discovery.json
packer build infrastructure/db.json
packer build infrastructure/app.json
docker-compose -f infrastructure/docker-compose.yml up
