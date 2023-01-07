const TipsType = {
    tipsNormal: 'tips',
    tipsPrimary: 'tips-primary',
    tipsSuccess: 'tips-success',
    tipsInfo: 'tips-info',
    tipsWarning: 'tips-warning',
    tipsDanger: 'tips-danger',
};
const TitleType = {
    admin: 'admin',
    owner: 'owner',
};
const htmls = [
    {
        messageType: 'tipsDanger',
        html: '从我做过的类聊天需求来看，聊天消息要么是纯文本，要么是富文本。所以我抽离出来的消息渲染组件默认了消息是富文本。如果想发送HTML请自行魔改。'
    },
    {
        messageType: 'text',
        headIcon: './img/A.jpg',
        name: 'chenjunyu19',
        position: 'left',
        html: '这是什么什么鬼？'
    },
    {
        messageType: 'text',
        headIcon: './img/B.jpg',
        name: 'SuperPaxxs',
        position: 'right',
        html: 'LiteChat_Frame（轻聊天气泡框架），一个贼简洁 <del>(简单)</del> 、美观、易用的 HTML 聊天界面框架'
    },
    {
        messageType: 'text',
        headIcon: './img/B.jpg',
        name: 'SuperPaxxs',
        position: 'right',
        html: '它简洁而不简单，能使你开发聊天界面更快速'
    },
    {
        messageType: 'text',
        headIcon: './img/A.jpg',
        name: 'chenjunyu19',
        position: 'left',
        html: '直接说，气泡是谁的？'
    },
    {
        messageType: 'text',
        headIcon: './img/B.jpg',
        name: 'SuperPaxxs',
        position: 'right',
        html: '好吧，气泡css来自 <a href="http://i.intas.cn/" target="_blank">Haswikr的Blog</a> 的机器人气泡，我给白色的加了点边框 😝 '
    },
    {
        messageType: 'text',
        headIcon: './img/H.jpg',
        name: 'Haswikr',
        position: 'left',
        htitleType: 'admin',
        htitle: 'admin',
        html: '当初调色煞费苦心'
    },
    {
        messageType: 'text',
        headIcon: './img/O.jpg',
        name: 'Sonui',
        position: 'left',
        htitleType: 'owner',
        htitle: 'owner',
        html: '这设计真棒'
    },
    {
        messageType: 'text',
        headIcon: './img/A.jpg',
        name: 'chenjunyu19',
        position: 'left',
        htitle: 'menber123456789789',
        html: '那咋用啊？'
    },
    {
        messageType: 'text',
        headIcon: './img/B.jpg',
        name: 'SuperPaxxs',
        position: 'right',
        html: `<del>诶哟少年你找对人了</del><br><br>
            如果只是使用，那非常简单。<br>
            <h2>使用指北</h2>
            1.引用css： litechat.css<br><br>
            &lt;link type=&quot;text/css&quot; href=&quot;//lab.morfans.cn/LiteWebChat_Frame/litewebchat.css&quot; rel=&quot;stylesheet&quot; /&gt;
            <br>或<br>
            &lt;link type=&quot;text/css&quot; href=&quot;//lab.morfans.cn/LiteWebChat_Frame/litewebchat.min.css&quot; rel=&quot;stylesheet&quot; /&gt;<br><br>
            2.创建一个 DIV ，用来容纳聊天对话，目的是不让 css 干扰页面其他内容：<br><br>
            &lt;div class=&quot;lite-chatbox&quot;&gt; <br>
            ...<br>
            &lt;/div&gt;<br><br>
            话说你就不会看下源码吗...<b>楼下就是特性演示</b>`
    },
    {
        messageType: 'tipsNormal',
        html: 'Chenjunyu19 退出了聊天室并撩了你一把'
    },
    {
        messageType: 'text',
        headIcon: './img/A.jpg',
        name: '空消息测试1',
        position: 'left',
        html: ''
    },
    {
        messageType: 'text',
        headIcon: './img/B.jpg',
        name: '空消息测试2',
        position: 'right',
        html: '&nbsp;'
    },
    {
        messageType: 'text',
        headIcon: './img/A.jpg',
        name: 'chenjunyu19',
        position: 'left',
        html: '注意，上面两条空消息的消息内容代码不一样？'
    },
    {
        messageType: 'text',
        headIcon: './img/B.jpg',
        name: 'SuperPaxxs',
        position: 'right',
        html: '头像换成方形请去掉 radius ;我认为应该不会有方形的。so....自己动手丰衣足食吧（F12）'
    },
    {
        messageType: 'text',
        headIcon: './img/A.jpg',
        name: 'chenjunyu19',
        position: 'left',
        diamond: true,
        html: '我是左边的方形头像'
    },
    {
        messageType: 'text',
        headIcon: './img/B.jpg',
        name: '图片消息',
        position: 'right',
        html: '<img src="./img/img2.png">'
    },
    {
        messageType: 'text',
        headIcon: './img/A.jpg',
        name: '图片消息2',
        position: 'left',
        html: `<img src="./img/img.png"><br>图片带文字是可以的 <del>（废话）</del>`
    },
    {
        messageType: 'text',
        headIcon: './img/B.jpg',
        name: '右边长消息',
        position: 'right',
        html: '我的消息真的超级长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长欸'
    },
    {
        messageType: 'text',
        headIcon: './img/A.jpg',
        name: '左边长消息',
        position: 'left',
        html: '这么巧鸭，我的也超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超级长的欸\n'
    },
    {
        messageType: 'tipsDanger',
        html: '系统消息：左/右边长消息被管理员批判一番……'
    },
    {
        messageType: 'tipsNormal',
        html: '系统消息：normal'
    },
    {
        messageType: 'tipsPrimary',
        html: '系统消息：primary'
    },
    {
        messageType: 'tipsSuccess',
        html: '系统消息：success'
    },
    {
        messageType: 'tipsInfo',
        html: '系统消息：info'
    },
    {
        messageType: 'tipsWarning',
        html: '系统消息：warning'
    },
    {
        messageType: 'tipsDanger',
        html: '系统消息：danger'
    },
    {
        messageType: 'text',
        headIcon: './img/B.jpg',
        name: '带有超链接的消息测试',
        position: 'right',
        html: `当然是可以有超链接的。例子在这里：<br><a href="http://morfans.cn" target="_blank">你敢点我吗</a> ← 戳这里`
    },
    {
        messageType: 'text',
        headIcon: './img/A.jpg',
        name: '全符号测试',
        position: 'left',
        html: '。，；？：！‘’“”@ˆ.,;?:!&#x27;&quot;〝〞﹫ˇ'
    },
    {
        messageType: 'text',
        headIcon: './img/A.jpg',
        name: '全emoji测试',
        position: 'left',
        html: `😀😝🐂🍺`
    },
    {
        messageType: 'text',
        headIcon: './img/B.jpg',
        name: '&nbsp;',
        position: 'right',
        html: `当无昵时候需要 &nbsp; 填充`
    },
    {
        messageType: 'text',
        headIcon: './img/B.jpg',
        name: 'SuperPaxxs',
        position: 'right',
        html: '换行用 &lt;br /&gt; ，HTML 你懂的..'
    },
    {
        messageType: 'text',
        headIcon: './img/A.jpg',
        name: 'chenjunyu19',
        position: 'left',
        html: `以上就是全部的特性，以后有空再更`
    },
];

function beforeRenderingHTML (data, chatboxClass) {
    let htmlStr = '';
    let chatBox = document.querySelector(chatboxClass);
    for (let i = 0; i < data.length; i++) {
        if(data[i].isRender){
            continue;
        }
        if (data[i].messageType.indexOf('tips') !== -1) {
            htmlStr += renderTipHtml(data[i].html, TipsType[data[i].messageType] || 'tips');
        } else {
            htmlStr += renderMessageHtml(data[i]);
        }
        data[i].isRender = true;
    }
    chatBox.innerHTML += htmlStr;
    setTimeout(()=>{
        if(chatBox.scrollHeight > chatBox.clientHeight) {
            chatBox.scrollTop = chatBox.scrollHeight;
            chatBox = '';
            htmlStr = '';
        }
    },300);
}

function renderMessageHtml (data) {
    return `<div class="c${data.position} cmsg">
        <img class="headIcon ${data.diamond ? '' : 'radius'}" src="${data.headIcon}" ondragstart="return false;" oncontextmenu="return false;"/>
        <span class="name">
            ${renderTitleHtml(data.htitle, TitleType[data.htitleType] || '')}
            <span style="vertical-align: middle;">${data.name || ''}</span>
        </span>
        <span class="content">${data.html || ''}</span>
    </div>`;
}

function renderTitleHtml (content, css) {
    if (!content) return '';
    return `<span class="htitle ${css}" style="margin: 0 4px 0 0;">${content}</span>`;
}

function renderTipHtml (content, css) {
    if (!content) return '';
    return `<div class="tips"><span class="${css}" style="margin-bottom: 20px;">${content}</span></div>`;
}

beforeRenderingHTML(htmls, '.lite-chatbox');
