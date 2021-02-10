const { program } = require('commander');
const getRealUrl = require('./app');

program
    .version('0.0.1')
    .description("get the real address of Bilibili video")
    .option("-u, --url <url>", "the url of Bilibili video")
    .action(async (option) => {
        let realUrl = await getRealUrl(option.url);
        console.log(realUrl);
    });

program.parse(process.argv);