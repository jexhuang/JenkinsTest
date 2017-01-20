function route(pathname,handle,response) {
  if(typeof handle[pathname] === 'function'){
    handle[pathname](response);
  }
}

exports.route = route;
