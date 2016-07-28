var magnetlinks = document.querySelectorAll("a[href^='magnet:']");

for (link in magnetlinks) {
    if (magnetlinks[link] == undefined ||
        magnetlinks[link].href == undefined)
        continue;

    var horseshoe = magnetlinks[link].href.split('?');
    if (horseshoe.length < 2)
        continue;
    var horseshoe = horseshoe[1].split('&');
    for (query in horseshoe) {
        if (horseshoe[query] == undefined)
            continue;
        if (horseshoe[query].startsWith('xt=urn:btih:'))
            magnetlinks[link].href = 'magnet:?' + horseshoe[query];
    }
}
