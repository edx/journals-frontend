# journals-frontend

journals-frontend is a single page application written in React/Redux to be used with the [`Journals Service`](https://github.com/edx/journals) backend.

It communciates with Journals Service via Rest API's, and authenticates through the edx LMS. 

journals-frontend main features include:
    
* **Marketing Pages**: About and Index pages to display and highlight information about your collection of Journals
* **Journal Content Viewing**: rendering of Journal pages with html, images, inline pdf's and videos
* **Table of Contents**: navigable heirarchical content overview
* **Full-text search**: search and filtering of journal content
* **Themable**
* **Mobile friendly**


## Getting Started

journals-frontend runs in it's own docker container, but relies on [`Journals Service`](https://github.com/edx/journals/blob/master/README.rst) and [`edx platform`](https://github.com/edx/devstack/blob/master/README.rst) containers to be running to be fully functional.

Please follow [`these instructions`](https://github.com/edx/journals/blob/master/README.rst#getting-started) to setup the journals-frontend and prerequiste containers. 

This container can be started by running `make up` and can be accessed via http://localhost:1991 after it's running.
