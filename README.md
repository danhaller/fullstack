# fullstack

## What is it?

Playing around with everything needed to build a 12 factor, reactive, progressive, buzzword-laden full stack web application.

Current progress/legacy:

- A node app with a rethinkdb database, communicating via consul
- Services running in docker, supervised by s6 via s6-overlay, built with packer & ansible
- Services brought up by docker-compose

## How do I run it?

- git clone git@github.com:danhaller/fullstack.git
- sh ./run.sh

## What can I see?

- App @ http://localhost:3000
- Consul UI @ http://localhost:8500/ui/
- Rethinkdb UI @ http://localhost:8080
