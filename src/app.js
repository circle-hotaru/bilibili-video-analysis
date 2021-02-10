const got = require('got');
const cheerio = require('cheerio');

const getRealUrl = async function (url) {
    const videoURL = new URL(url);
    const host = videoURL.hostname;
    if (host.indexOf('bilibili.com') == -1) return 'url host wrong: ' + url;

    const path = videoURL.pathname;

    const header = {
        'authority': host,
        'method': 'GET',
        'path': path,
        'scheme': 'https',
        'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
        'accept-encoding': 'gzip, deflate, br',
        'accept-language': 'zh-CN,zh;q=0.9',
        'cache-control': 'max-age=0',
        'upgrade-insecure-requests': '1',
        'user-agent': 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.25 Mobile Safari/537.36',
    };

    let realUrl = '';

    try {
        const response = await got(url, { headers: header });

        const $ = cheerio.load(response.body);
        $('script').each((i, elem) => {
            let content = $(elem).html();
            if (content.indexOf('readyVideoUrl') != -1) {
                const re = /readyVideoUrl: \'[\w\W]*\',/;
                let search = re.exec(content)[0];
                realUrl = search.slice('readyVideoUrl: \''.length, search.length - 2);
                return false;
            }
        })
    } catch (error) {
        console.log(error.response.body);
    }

    return realUrl;
}

module.exports = getRealUrl;