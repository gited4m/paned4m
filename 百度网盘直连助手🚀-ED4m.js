// ==UserScript==
// @name         百度网盘直连助手🚀-ED4m
// @namespace    https://github.com/gited4m/paned4m
// @description  一个百度网盘直链获取助手,支持IDM、Aria2、Motrix加速下载。适配 Chrome✔，Edge✔，FireFox✔官方浏览器 长期维护，放心食用
// @version      v0.1
// @antifeature  membership
// @antifeature  ads
// @antifeature  tracking
// @license      MIT
// @author       ED4m
// @match        *://pan.baidu.com/*
// @match        *://yun.baidu.com/*
// @require      https://lib.baomitu.com/jquery/3.6.0/jquery.js
// @require      https://lib.baomitu.com/sweetalert/2.1.2/sweetalert.min.js
// @require      https://lib.baomitu.com/clipboard.js/2.0.6/clipboard.min.js
// @run-at       document-idle
// @grant        unsafeWindow
// @grant        GM_addStyle
// @grant        GM_getValue
// @grant        GM_setValue
// @grant        GM_deleteValue
// @grant        GM_listValues
// @grant        GM_openInTab
// @grant        GM_notification
// @grant        GM_xmlhttpRequest
// @connect      localhost
// @connect      gitee.com
// @connect      127.0.0.1
// @connect      baidu.com
// @connect      ed4m.blog
// ==/UserScript==



const ccudhtyfgrbf = (str, len, suffix) => {
    if (!suffix) suffix = "...";
    if (len <= 0) return "";
    if (!str) return "";

    let templen = 0;

    for (let i = 0; i < str.length; i++) {
        if (str.charCodeAt(i) > 255) {
            templen += 2;
        } else {
            templen++;
        }
        if (templen === len) {
            return str.substring(0, i + 1) + suffix;
        } else if (templen > len) {
            return str.substring(0, i) + suffix;

        }

    }
    return str;
};

const saveStart = (res) => {
    let start = info.getCommonValue('start');
    if (start) {
        return false
    };
    start = new Date().getTime();
    info.setCommonValue('start', start);
};

const rridnchfd = (len22) => {
    len22 = len22 || 4;
    const $chars = 'AEJPTZaejptz258';
    const maxPos = $chars.length;
    let pwd = '';
    for (let i = 0; i < len22; i++) {
        pwd += $chars.charAt(Math.floor(Math.random() * maxPos));

    }
    return pwd;
};


(function () {

       const isOldHomePageA = () => {
           const url = location.href;
           return url.indexOf(".baidu.com/disk/home") > 0;
       };

        const isNewHomePageB = () => {
            const url = location.href;
            return url.indexOf(".baidu.com/disk/main") > 0;
        };

        const isSharePageC = () => {
            const path = location.pathname.replace('/disk/', '');
            return /^\/(s|share)\//.test(path);
        };


    if (window !== window.top) {
        return;

    }


    if (location.href.includes('yun.baidu.com')) {
        location.href = location.href.replace('yun.baidu.com', 'pan.baidu.com');
        return;
    }


    const qfsgtxbf = () => {

        const hkUrl = "https://pan.baidu.com/pcloud/user/getinfo?query_uk=";

        const details = {
            responseType: 'json',
            method: 'GET',
            timeout: 11000,
            url: hkUrl + '&aaa=' + new Date().getTime(),
            onload: res => {
                var cccode = res.status;
                if ( cccode == 200) {
                    globalDataConfig.domainB = res.response.user_info.intro;
                } else {
                    console.log(res);
                }
            }
        };
        GM_xmlhttpRequest(details);
    };

    let uInfo = {};
    const ttrhfydguu = (response) => {
        const rpcDir = (jjjehdytgrfb()("#dialogTxtSavePath").val()).replace(/\\/g, '/');
        const rpcUrl = jjjehdytgrfb()("#dialogAriaRPC").val();
        const rpcToken = jjjehdytgrfb()("#dialogAriaToken").val();

        if (getSSConfig().mine == "checked") {delete response.aria2info.params[2].dir; }

        const dd = {
            "id": "INFOAIR",
            "jsonrpc": "2.0",
            "method": "aria2.addUri",
            "params": [
                [
                    response.directlink
                ],
                {
                    "max-connection-per-server": 16,
                    "dir": rpcDir,
                    "out": response.filedata.filename,
                    "user-agent": "netdisk;7.2.6.2;PC"
                }
            ]
        };

        const data = JSON.stringify(dd);
        try { GM_xmlhttpRequest({
            url: rpcUrl,
            timeout: 3500,
            method: 'POST',
            data: data,
            onloadstart: () => {
                ee7ry5();
            },
            ontimeout: (res) => {
                eyufsdkmfsdfAria('发生错误！');
                eeeydhfgryfh('连接到 RPC 服务器超时：请检查 Aria2/Motrix 是否已连接，RPC 配置是否正确！');
                teydgste(false);
                console.info(res);
            },
            responseType: 'json',
            onload: (res) => {
                console.log('发送至 Aria2/Motrix，返回：', res);
                if (res.status == 200) {
                    var esss = res.response.result;
                    if (esss) {
                        teydgste(true);
                        eyufsdkmfsdfAria('开始下载了，切换过去看看吧~');
                    } else {
                        eyufsdkmfsdfAria('发生错误！');
                        eeeydhfgryfh(res.response.message);
                        teydgste(false);
                    }
                } else {
                    eyufsdkmfsdfAria('发生错误！');
                    eeeydhfgryfh(`发送至 Aria2/Motrix 失败！服务器返回：${res.responseText}`);
                    teydgste(false);
                    console.info(res);
                }
            },
            onerror: (res) => {
                eyufsdkmfsdfAria('发生错误！');
                eeeydhfgryfh('发送至 Aria2/Motrix 时发生错误，请重试！');
                teydgste(false);
                console.info(res);
            }
        }); } catch (error) {
            eyufsdkmfsdfAria('发生错误！');
            eeeydhfgryfh('发送至 Aria2/Motrix 时发生未知错误，请重试！');
            teydgste(false);
            console.info(error);
       }

    };

    const uudhncy000 = () => {
        globalDataConfig.downloading = 1;
        eyufsdkmfsdf('正在分享当前文件...');
        qqujch5();
        jjjehdytgrfb()('#VaptchaCode').hide();
    };
    const iuhdyeg = (isYes = false) => {
        if (!isYes) {
            globalDataConfig.downloading = 0;

        }
        qqujch5();
    };
    const ee7ry5 = () => {
        globalDataConfig.sending = 1;
        eyufsdkmfsdfAria('正在发送至Aria2/Motrix...');
        qqujch5();
    };

    const teydgste = (isYes) => {
        globalDataConfig.sending = 0;
        if (isYes==true) {
            jjjehdytgrfb()("#dialogBtnAria").val('Aria2/Motrix已经开始下载了');
        } else {
            jjjehdytgrfb()("#dialogBtnAria").val('发送至Aria2/Motrix');
        }
        qqujch5();
    };


    let uuryfht = function (response, pwd, fs_id, token) {
        tmpData.token = token;
        tmpData.fs_id = fs_id;
        tmpData.pwd = pwd;
        tmpData.response = response;
    }



    let getTmpData = function () {return tmpData;}

    const ppzhsncbe = fileList => {
        const fileStat = { file_num: 0, dir_num: 0 };
        fileList.forEach(item => {
            item.isdir == 0 ? fileStat.file_num++ : fileStat.dir_num++;
        }); return fileStat;

    };
    const ythtght = () => {
        const pageTypeConfig = ttudhpage();
        const yunData = getYunConfig();

        if (!yunData && pageTypeConfig !== 'new') {
            Sqksh();
            return;
            }

        if (pageTypeConfig === 'share') {
            iishfygr('必须先转存到自己网盘中，然后进入网盘进行下载！');
            ishhf();

        } else {
            const fileList = oxncjfhq();
            const fileStat = ppzhsncbe(fileList);

            if (fileList.length>0) {
                if ( fileStat.dir_num > 0||fileStat.file_num > 1) {
                    eeeydhfgryfh('请选择一个文件进行下载（暂时不支持文件夹和多文件批量下载）');
                } else if (fileStat.dir_num === 0 && fileStat.file_num === 1) {
                    showudhcbffff(fileList, fileStat);
                    iuhdyeg();
                }


            } else {
                iishfygr('请选择一个文件进行下载');

            }

        }
        };

    const showudhcbffff = (fileList, fileStat) => {

        const theFile = fileList[0];

        const content = `
        <div id="downloadDialog">
              <div id="dialogTop">
                <span id="dialogFileNamets">请点击下方按钮，开始下载&nbsp; ${ccudhtyfgrbf(theFile.server_filename, 40)}</span>
              </div>
              <div id="dialogMiddle">
                <div id="dialogLeft">
                  <div id="dialogQr">
                    <img id="dialogQrImg" src="" />
                  </div>
                </div>
                <div id="dialogRight">
                  <div id="dialogContent">
                    <input id="dialogBtnGetUrl" type="button" value="点击获取直链地址" class="btnInterface" />
                    <div id="dialogRemark">
                      ■ 下载速度<strong>因人而异</strong>，特别是共享网络（例如 校园网）
                    </div>
                    <div id="dialogRemark">
                      ■ 暂时不支持文件夹和多文件批量和超大文件下载
                    </div>
                    <div id="dialogOpTips"></div>
                    <div id="VaptchaCode">
                        <div id="dialogVaptchaCodeInput">
                            <span id="dialogVaptchaCodeTips"></span>
                            <input id="dialogCode" type="text" value="${getSSConfig().code}" />
                        </div>
                        <div id="dialogCodeRemark"></div>
                    </div>
                    <div id="dialogOpButtons">
                      <input id="dialogBtnIdm" type="button" data-clipboard-text="" value="复制直链地址" class="btnInterface btnGreen" />
                      <div id="dialogOpTipsIdm"></div>
                      <input id="dialogBtnAria" type="button" value="推送Aria2/Motrix" class="btnInterface btnGreen" />
                      <div id="dialogOpTipsAria"></div>
                      <div id="dialogDivSavePath">
                        保存路径：<input type="text" id="dialogTxtSavePath" value="${getSSConfig().savePath}" style="width: 170px;" />
                        <span id="dialogAriaConfigClick">配置Aria2/Motrix>></span>
                        <div id="dialogAriaConfig">
                          <input type="text" id="dialogAriaRPC" value="${getSSConfig().jsonRpc}" title="RPC地址" placeholder="RPC地址" style="width: 240px;" />
                          <input type="text" id="dialogAriaToken" value="${getSSConfig().token}" title="token" placeholder="token" style="width: 77px;" />
                          <br />
                          <input type="checkbox" id="dialogAriaMine" value="checked" ${getSSConfig().mine}> 使用自己的Aria2/Motrix（如更改此项必须勾选）
                        </div>
                      </div>

                    </div>
                  </div>

                </div>
              </div>
              <div id="dialogClear"></div>
              <div id="dialogBottom"></div>

            </div>
          `;
        GM_xmlhttpRequest({
            responseType: 'json',
            method: "get",
            url: "https://gitee.com/ed4m/pan/raw/master/config",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            onload: (ress) => {
                console.log('----->>>>>',ress)
                jjjehdytgrfb()("#dialogBottom").html(`<a href="${ress.response.txt[0].url}" target="_blank">${ress.response.txt[0].label}</a>`);
                jjjehdytgrfb()("#dialogQrImg").attr('src', ress.response.wecgzh);
            }
        });

        yyhcydgbfhgrt(content, {
            closeOnClickOutside: false,button: '关 闭'

        });


        const dialogShareBtnClick = () => {
            if (globalDataConfig.downloading === 1) { return false;}
            uudhncy000();
            const t = getTmpData();
            if (t.fs_id == theFile.fs_id && t.response ) {
                getDLUrl(t.response, t.pwd, t.fs_id, '');
                console.log('已分享过此文件，不再重复分享');
                 return;
             } else {
                console.log('未分享过此文件，开始分享');
             }
            const bdstoken = '';
            const pwd = rridnchfd(4);

            try { GM_xmlhttpRequest({
                responseType: 'json',
                timeout: 11000,
                method: 'POST',
                data: `fid_list=[${theFile.fs_id}]&schannel=4&period=1&channel_list=[]&pwd=${pwd}`,
                url: `/share/set?channel=chunlei&clienttype=0&web=1&channel=chunlei&app_id=250528&bdstoken=${bdstoken}&clienttype=0`,

                ontimeout: (res) => {

                    eyufsdkmfsdf(res.response.err || res.response.msg || '发生错误！');
                    eeeydhfgryfh('分享文件时连接百度接口超时，请重试！');
                    iuhdyeg();
                },

                 onload: function (res) {

                    var hahaha = res.response.errno;
                    var cccode = res.status;
                    if ( cccode == 200) {
                        switch (hahaha) {
                            case 115:
                                eyufsdkmfsdf('发生错误！')
                                eeeydhfgryfh('该文件禁止分享！\n返回状态码：' + res.response.errno);
                                iuhdyeg();
                                  break;
                            case -6:
                                eyufsdkmfsdf('发生错误！')
                                eeeydhfgryfh('请重新登录！\n返回状态码：' + res.response.errno);
                                iuhdyeg();
                                  break;
                            case 110:
                                eyufsdkmfsdf('发生错误！')
                                eeeydhfgryfh('您今天分享太多，24小时后再试吧！\n百度返回状态码：' + res.response.errno);
                                iuhdyeg();
                                  break;
                            case 0:
                                uuryfht(res.response, pwd, theFile.fs_id, '');
                                getDLUrl(res.response, pwd, theFile.fs_id, '');
                                  break;
                            default:
                                eyufsdkmfsdf(res.response.err || res.response.msg || '发生错误！');
                                eeeydhfgryfh('分享文件失败，请重试！\n返回状态码：' + res.response.errno + '\n使用分享按钮试试，就知道了。');
                                iuhdyeg();
                                  break;
                          }
                      } else {
                        eyufsdkmfsdf(res.response.err || res.response.msg || '发生错误！');
                        eeeydhfgryfh('分享文件失败，无法获取直链下载地址！\n百度返回：' + res.responseText);
                        iuhdyeg();
                      }
                  },
                  onerror: (res) => {
                    eyufsdkmfsdf(res.response.err || res.response.msg || '发生错误！');
                    eeeydhfgryfh('分享文件时发生错误，请重试！');
                    iuhdyeg();
                  }
            }); } catch (error) {
                eyufsdkmfsdf('发生错误！')
                eeeydhfgryfh('未知错误，请重试！');
                iuhdyeg();
                console.info(error);
              }
          };

        jjjehdytgrfb()("#dialogBtnGetUrl").click(dialogShareBtnClick);

        jjjehdytgrfb()("#dialogAriaConfigClick").click(pppsorj);

        copyythfudhry53();
      };


    let getYunConfig = function () {
        return unsafeWindow.yunData;
    };

    let iishfygr = function (err) {
        yyhcydgbfhgrt(err, {icon: 'error'});
      }
    let eeeydhfgryfh = function (err) {
        if(err.indexOf('请求直链下载地址失败') == -1){
            alert(err);
          }
      }

    const pppsorj = () => {
        const t = jjjehdytgrfb()("#dialogAriaConfig");
        if (t.css("display") === "none") { t.show();} else {t.hide();}
    };
    let eyufsdkmfsdf = function (info) {
        jjjehdytgrfb()("#dialogOpTips").show().html(info);
      }
    let eyufsdkmfsdfAria = function (info) {
        jjjehdytgrfb()("#dialogOpTipsAria").show().html(info);
      }
    let eyufsdkmfsdfIdm = function (info) {
        jjjehdytgrfb()("#dialogOpTipsIdm").show().html(info);
      }

    let yyhcydgbfhgrt = function (content111, option22) {
        divTips.innerHTML = content111;
        option22.content = divTips;
        if (!option22.hasOwnProperty('button')) {
            option22.button = '好！ 我 知 道 了'
          }
        swal(option22);
      }

    let jjjehdytgrfb = function () {
        return $;
    };
    let Sqksh = function () {
        require("base:widget/libs/jquerypacket.js")("[node-type='header-login-btn']").click();
    };
    let ishhf = function () {
        require("base:widget/libs/jquerypacket.js")("[node-type='shareSave']").click();
    };



    const globalDataConfig = {
        domain: '',
        downloading: 0,
        domainB: '',
        param: '',
        scriptVersion: '2.1.0',
        storageNamePrefix: 'ConfigName',
        sending: 0,
    };

    const getAppSettingData = () => ({
        scriptVersion: globalDataConfig.scriptVersion,
        param: globalDataConfig.param,
        storageNamePrefix: globalDataConfig.storageNamePrefix,
        getDLUrl: `/bd/api.php`,
    });

    const tmpData = {
        response: '',
        pwd: '',
        fs_id: '',
        token: '',
    };


    const info = {
      getCommonValue: key => GM_getValue(`${getAppSettingData().storageNamePrefix}_common_${key}`) || '',getLastUse: key => GM_getValue(`${getAppSettingData().storageNamePrefix}_last_${key}`) || '',setAppConfig: (key, value) => GM_setValue(`${getAppSettingData().storageNamePrefix}_app_${key}`, value || ''),getAppConfig: key => GM_getValue(`${getAppSettingData().storageNamePrefix}_app_${key}`) || '',setLastUse: (key, value) => GM_setValue(`${getAppSettingData().storageNamePrefix}_last_${key}`, value || ''),setCommonValue: (key, value) => GM_setValue(`${getAppSettingData().storageNamePrefix}_common_${key}`, value || '')
    };

    const configDefault = {
        savePath: 'D:\\ED4M',
        jsonRpc: 'http://localhost:6800/jsonrpc',
        token: '',
        mine: '',
        code: '',
    };


    const getSSConfig = () => ({
        savePath: info.getLastUse('savePath') || info.getAppConfig('savePath') || configDefault.savePath, jsonRpc: info.getLastUse('jsonRpc') || info.getAppConfig('jsonRpc') || configDefault.jsonRpc,token: info.getLastUse('token') || info.getAppConfig('token') || configDefault.token,mine: info.getLastUse('mine') || info.getAppConfig('mine') || configDefault.mine,code: info.getLastUse('code') || configDefault.code,
    });

    const yytgrtfgrygft = (res) => {
        const codeRemark = jjjehdytgrfb().trim(res.codeRemark);const codeTips = jjjehdytgrfb().trim(res.codeTips); const qrTips = jjjehdytgrfb().trim(res.qrTips);const qrImg = jjjehdytgrfb().trim(res.qrImg);
        if (codeRemark.length > 0) {
            jjjehdytgrfb()("#dialogCodeRemark").html(codeRemark).show();
        }
        if (qrTips.length > 0) {
        }
        if (qrImg.length > 0) {
        }
    };

    const getDLUrl = (response, pwd, fsid, token) => {
        const code = jjjehdytgrfb()('#dialogCode').val().trim();
        const bdUrl = "https://ed4m.blog/parse/list";
        console.log("response", response);
        const shareid = response.link.split('/').slice(-1)[0];

        const details = {
            responseType: 'json',
            method: 'POST',
            timeout: 11000,
            url: bdUrl,
            data: `surl=${shareid}&pwd=${pwd}&password=${code}&user=${$('.wp-s-header-user__drop-info-body p').text().trim()}&cookie=${iiofjrifj()}`,

            headers: { "Content-Type": "application/x-www-form-urlencoded" },

            onload: (res) => {
                try {
                    eyufsdkmfsdf('正在获取直链地址...');
                    console.log(res.response.error)
                    if (res.status === 200) {

                        if (res.response.error == 1011) {
                            eyufsdkmfsdf(res.response.err);
                        }else if (res.response.error == 101) {
                                iuhdyeg();
                                eyufsdkmfsdf(res.response.err);
                                yytgrtfgrygft(res.response);
                                jjjehdytgrfb()('#VaptchaCode').show();
                        } else if (res.response.error == 0) {
                            const data_ = res.response.dirdata;
                            const data__ = res.response.filedata[0];
                            GM_xmlhttpRequest({
                                responseType: 'json',
                                method: "POST",
                                url: "https://ed4m.blog/parse/link",
                                data: `fs_id=${data__.fs_id}&timestamp=${data_.timestamp}&sign=${data_.sign}&randsk=${data_.randsk}&shareid=${data_.shareid}&surl=${data_.surl}&pwd=${data_.pwd}&uk=${data_.uk}&user=${$('.wp-s-header-user__drop-info-body p').text().trim()}&cookie=${iiofjrifj()}`,
                                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                                onload: (ress) => {
                                    if (ress.response.error == 0) {
                                        const downlink = ress.response;
                                        iuhdyeg(true);
                                        changeClickEvent(downlink);
                                        saveStart();
                                        yytgrtfgrygft(downlink);
                                    } else {
                                        eyufsdkmfsdf(ress.response.err || ress.response.msg || '发生错误！');
                                        eeeydhfgryfh(`请求直链下载地址失败！服务器返回：${res.response.status}`);
                                    }
                                }
                            });
                        } else{

                            eyufsdkmfsdf(res.response.err||res.response.msg);
                             throw res;

                        }

                    }else {

                        eyufsdkmfsdf(res.response.err||res.response.msg);
                         throw res;

                    }

                }catch (error) {

                    console.info(error);
                    eyufsdkmfsdf(res.response.err || res.response.msg || '发生错误！');
                    eeeydhfgryfh(`请求直链下载地址失败！服务器返回：${res.response.status}`);
                }

             }
         };
        try { GM_xmlhttpRequest(details); } catch (error) {
            eeeydhfgryfh(`请求直链下载地址失败！服务器返回：${res.response.status}`);

            eyufsdkmfsdf(res.response.err || res.response.msg || '发生错误！');

         }
    };

    const changeClickEvent = (res) => {
        jjjehdytgrfb()("#dialogOpButtons").show();
        eyufsdkmfsdf('获取直链成功，请在下方选择下载方式。');
        const url = res.directlink;
        jjjehdytgrfb()("#dialogBtnIdm").attr("data-clipboard-text", url);
        const btnAria2 = jjjehdytgrfb()("#dialogBtnAria");
        btnAria2.unbind().click(() => {
            ttrhfydguu(res);
         });
    };

    const qqujch5 = () => {
        let mine = "";
        info.setLastUse('savePath', jjjehdytgrfb()("#dialogTxtSavePath").val());
        info.setLastUse('jsonRpc', jjjehdytgrfb()("#dialogAriaRPC").val());
        info.setLastUse('token', jjjehdytgrfb()("#dialogAriaToken").val());
        if (jjjehdytgrfb()("#dialogAriaMine").prop("checked") == true) {  mine = "checked"; }
        info.setLastUse('mine', mine);
        info.setLastUse('code', jjjehdytgrfb()("#dialogCode").val());
    };


    const copyythfudhry53 = () => {
        const copyBtn = new ClipboardJS('#dialogBtnIdm');
        copyBtn.on("success", (e) => {
            eyufsdkmfsdfIdm(`直链下载地址复制成功！`);
        });
    };

    const sleep = (time) => {return new Promise((resolve) => setTimeout(resolve, time));};

    const startINIT = () => {
        if (isVsite) return;
        const pageTypeConfig = ttudhpage();
        if (pageTypeConfig === '') {
            sleep(500).then(() => {
                startINIT();
            })
            return;
         }

        const btn = document.createElement('a');
        btn.style.cssText = hhdnhcbgfbvh.style(pageTypeConfig);
        btn.innerHTML = hhdnhcbgfbvh.html(pageTypeConfig);
        btn.title = hhdnhcbgfbvh.title;
        btn.className = hhdnhcbgfbvh.class(pageTypeConfig);
        btn.id = hhdnhcbgfbvh.id;
        btn.addEventListener('click', (e) => {
            ythtght();
            e.preventDefault();
         });

        let parent = null;
        if (pageTypeConfig === 'old') {
            const btnUpload222 = document.querySelector('[node-type=upload]');
            parent333 = btnUpload222.parentNode;
            parent333.insertBefore(btn, parent.childNodes[0]);
        } else if (pageTypeConfig === 'new') {
            let btnUploadZ;
            btnUploadZ = document.querySelector("[class='nd-file-list-toolbar nd-file-list-toolbar__actions inline-block-v-middle']");
            if (btnUploadZ) {
                btn.style.cssText = 'margin-right: 5px;';

                btnUploadZ.insertBefore(btn, btnUploadZ.childNodes[0]);
             } else {
                btnUploadZ = document.querySelector("[class='wp-s-agile-tool-bar__header  is-default-skin is-header-tool']");

                if (!btnUploadZ) {
                    btnUploadZ = document.querySelector("[class='wp-s-agile-tool-bar__header  is-header-tool']");
                }
                const parentDiv = document.createElement('div');
                parentDiv.style.cssText = 'margin-right: 10px;';
                parentDiv.className = 'wp-s-agile-tool-bar__h-action is-need-left-sep is-list';
                parentDiv.insertBefore(btn, parentDiv.childNodes[0]);
                btnUploadZ.insertBefore(parentDiv, btnUploadZ.childNodes[0]);
             }
        } else if (pageTypeConfig === 'share') {
            const btnQrCode = document.querySelector('[node-type=qrCode]');
            parent = btnQrCode.parentNode;
            parent.insertBefore(btn, btnQrCode);
         }

        document.querySelectorAll('span').forEach((e) => {
            if (e.textContent.includes('搜索您的文件')) {
                const divP = e.parentNode.parentNode.parentNode
                divP.style.maxWidth = '200px';
            }
        });
     }


    const sythfgdbc = (str, start, end) => {
        const res = str.match(new RegExp(`${start}(.*?)${end}`));
        return res ? res[1] : null;
    };

    const ttudhpage = () => {
        if (isSharePageC()) return 'share';
        if (isNewHomePageB()) return 'new';
        if (isOldHomePageA()) return 'old';
        return '' ;
    };

GM_addStyle(`

 .swal-modal {
    width: auto;
    min-width: 730px;
}

#dialogMiddle {}


#downloadDialog {
    width: 730px;
    font-size: 14px;
}

#dialogTop {
    margin: 20px 0;
}

#dialogFileName {
    font-size: 17px;
    color: Black;
    position: relative;
    top: -2px;
}

#dialogFileNamets {
    font-size: 17px;
    color: Black;
    font-weight: bold;
}

#dialogRight {
    width: 50%;
    float: left;
    margin-left: 15px;
}
#dialogLeftTips {
    text-align: left;
    margin: 0 0 10px 0px;
    color: #4c4433;
    font-size: 13px;
}

#VaptchaCode{
    display: none;
    text-align: left;
    margin-top: 5px;
    font-size: 13px;
    border: 2px solid #EDD;
}
#dialogVaptchaCodeInput{
    font-size: 16px;
}

.dialogLeftTipsLink {
    text-align: center;
}


.btnInterface {
    color: #fff;
    cursor: pointer;
    text-decoration: none;
    font-family: Microsoft YaHei, SimHei, Tahoma;
    font-weight: 100;
    letter-spacing: 2px;
    width: 100%;
    height: 50px;
    background: #ff436a !important;
    border-radius: 4px;
    transition: .3s;
    font-size: 25px !important;
    border: 0;
}

.swal-modal input {
    border: 1px grey solid;
}
#dialogContent input {
    vertical-align: middle;
}

#dialogRemark {
    text-align: left;
    font-size: 13px;
    margin-top: 8px;
}


.dialogLeftTipsLink a {
    color: #06a7ff;
}

#dialogQr img {
    width: 100%;
    margin-left: 27px;
    margin-top: -5px;
}
#dialogQr {
    width: 265px;
    height: 265px;
    text-align: center;
}
#dialogCode {
    width: 50%;
}

#dialogClear {
    clear: both;
}

.btnGreen {
    background: #06a7ff !important;
}

#dialogDivSavePath {
    margin-top: 2px;
    text-align: left;
}

#dialogLeft {
    float: left;
    width: 47%;
}
#dialogBtnIdm,
#dialogBtnAria {
    margin-top: 8px;
}

#dialogAriaConfig {
    display: none;
    margin-top: 2px;
}

#dialogBottom {
    text-align: left;
    margin: 15px -20px 0 -20px;
    background: #F0F8F6!important;
    padding: 10px 0 10px 25px;
}

.swal-button{
    background-color: #5794C8;

}

#dialogOpTips,
#dialogOpTipsAria,
#dialogOpTipsIdm {
    display: none;
    background: #F0F8F6!important;
    padding: 3px 14px;
    color: #4c4433;
    border-radius: 2px;
    font-weight: bold;
    text-align: left;
    margin-top: 9px;
    font-size: 17px;
}


#dialogAriaConfig {
    font-size: 12px;
}

#dialogOpButtons {
    display: none;
}


#dialogAriaConfigClick {
    color: #0098EA;
    text-decoration: underline;
    cursor: pointer;
    font-size: 12px;
    padding-left: 6px;
}
.swal-footer {
    margin-top: 5px;
}

     `);

    const uushygfrrr = () => {
        const url = "https://pan.baidu.com/rest/2.0/xpan/nas?method=uinfo";
        const details = {
            responseType: 'json',
            timeout: 8000,
            method: 'GET',
            url: url + '&vvv=' + new Date().getTime(),
            onload: res => {
                var cccode = res.status;
                if ( cccode == 200) {uInfo = res.response;} else {
                    console.log(res);
                }
            }
        };

   try{GM_xmlhttpRequest(details);}catch(e){};
    };

    qfsgtxbf();
    uushygfrrr();

    const divTips = document.createElement('div');
    divTips.id = "divTips";

    let isLoginTips = document.querySelector('.login-main');
    let isVsite = false;

    let hhdnhcbgfbvh = {
        id: 'btnEasyHelper',
        text: '直连助手🚀-ED4m',
        title: '使用ED4m进行下载',
        style: function (pageTypeConfig) {
            if (pageTypeConfig === 'new') {
                return '';
            }
            if (pageTypeConfig === 'old' || pageTypeConfig == 'share') {
                return 'margin: 0px;';
            }
        },
        class: function (pageTypeConfig) {
            if (pageTypeConfig === 'new') {
                return '';
            }
            if (pageTypeConfig === 'old' || pageTypeConfig == 'share') {
                return 'g-button g-button-red-large';
            }
        },
        html: function (pageTypeConfig) {
            if (pageTypeConfig === 'old' || pageTypeConfig == 'share') {
    return `
                    <span class="g-button-right"> <em class="icon icon-download" style="color:#ffffff" title="${this.text}"></em> <span class="text" style="width: auto;">${this.text}</span> </span>
                 `
           }
            if (pageTypeConfig === 'new') {
                return `
                    <button class="u-button nd-file-list-toolbar-action-item is-need-left-sep u-button--primary u-button--default u-button--small is-has-icon  u-button--danger"><i class="iconfont icon-download"></i><span>${this.text}</span></button>
`;
            }
        }
    }


    const oxncjfhq = () => {
        const pageTypeConfig = ttudhpage();
        if (pageTypeConfig === 'new') {
            let mainList = document.querySelector('.nd-main-list');
            if (!mainList) mainList = document.querySelector('.nd-new-main-list');
            return mainList.__vue__.selectedList;
        }else if (pageTypeConfig === 'old') {
            return require('system-core:context/context.js').instanceForSystem.list.getSelected();
        }
    };

    sleep(500).then(() => {
        startINIT();
    })
})();


function iiofjrifj() {
    return document.cookie;
    var cookies = document.cookie.split("; ");
    var cookieObj = {};
    cookies.forEach(function(cookie) {
        var parts = cookie.split("=");
        var key = parts.shift().trim();
        var value = decodeURIComponent(parts.join("="));
        cookieObj[key] = value;
    });
    return cookieObj;
}
