# bilibili-video-analysis
获取 Bilibili 视频的真实地址

## 安装
```
npm i bilibili-video-analysis
```

## 使用
```
$ bili-video -h
Usage: bili-video [options]

get the real address of Bilibili video

Options:
  -V, --version    output the version number
  -u, --url <url>  the url of Bilibili video
  -h, --help       display help for command
```

```bash
$ bili-video -u https://www.bilibili.com/video/BV1Cs411m7Cn

# 输出真实地址
https://upos-sz-mirrorkodo.bilivideo.com/upgcxcode/91/33/4323391/4323391_da3-1-16.mp4?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfq9rVEuxTEnE8L5F6VnEsSTx0vkX8fqJeYTj_lta53NCM=&uipk=5&nbs=1&deadline=1612945075&gen=playurl&os=kodobv&oi=3072243031&trid=4c5938983c8c467fbdc775ee393ed744h&platform=html5&upsig=040e88d28278f2c27670fce4ac2cc27d&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,platform&mid=0&logo=80000000
```

## 参考
[ZimoLoveShuang/bilibili-video-analysis](https://github.com/ZimoLoveShuang/bilibili-video-analysis)

