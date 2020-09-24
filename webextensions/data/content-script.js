var magnetlinks = document.querySelectorAll("a[href^='magnet:']");

for (link in magnetlinks)
{
  if (magnetlinks[link] == undefined ||
      magnetlinks[link].href == undefined)
    continue;

  var old_url = new URL(magnetlinks[link].href);

  // xt hashes (required)
  if (old_url.searchParams.has('xt'))
  {
    var new_url = 'magnet:?'

    // copy hashes
    old_url.searchParams.getAll('xt').forEach(
      xt => new_url += `&xt=${xt}`
    );

    // content length (optional)
    if (old_url.searchParams.has('xl'))
      new_url += `&xl=${old_url.searchParams.getAll('xl')[0]}`;

    // file name (optional)
    if (old_url.searchParams.has('dn'))
      new_url += `&dn=${old_url.searchParams.getAll('dn')[0]}`;

    magnetlinks[link].href = new_url.replace('?&', '?');
  }
}
