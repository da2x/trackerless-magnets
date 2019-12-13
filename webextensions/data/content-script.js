var magnetlinks = document.querySelectorAll("a[href^='magnet:']");

for (link in magnetlinks)
{
  if (magnetlinks[link] == undefined ||
      magnetlinks[link].href == undefined)
    continue;

  var old_url = new URL(magnetlinks[link].href);

  // btih (required)
  if (old_url.searchParams.has('xt'))
  {
    var new_url = `magnet:?xt=${old_url.searchParams.getAll('xt')}`;

    // content length (optional)
    if (old_url.searchParams.has('xl'))
      new_url += `&xl=${old_url.searchParams.getAll('xl')}`;

    // file name (optional)
    if (old_url.searchParams.has('dn'))
      new_url += `&dn=${old_url.searchParams.getAll('dn')}`;

    magnetlinks[link].href = new_url;
  }
}