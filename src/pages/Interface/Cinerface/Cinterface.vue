<template>
  <div class="main">
    <div class="content">
      <div class="c-panel">
        <div class="header">
          <ul class="branch">
            <li>
              <router-link to="/" class="jump">主页</router-link>
            </li>
            <li class="nov">/API</li>
          </ul>
        </div>
        <div class="in-inner">
          <div class="topic-content">
            <div class="markdown-text">
              <p>以下api路径均已 <a href="/">https://cnodejs.org/api/v1 </a>为前缀</p>
              <h3>主题</h3>
              <h4>grt/topics 主题</h4>
              <p>接收的get参数</p>
              <ul>
                <li>page <code>Number</code> 页数</li>
                <li>tab <code>String</code>主题分类目前有<code>ask</code><code>share</code><code>job</code><code>good</code></li>
                <li>limit <code>Number</code>每一页的主题数量</li>
                <li>mdrender <code>String</code>当为<code>false</code>时，不渲染。默认为<code>true</code>,渲染出现的所有markdown格式文档</li>
              </ul>
              <p>示例：<a href="/">/api/v1/topics</a></p>
              <h4>get/topic.:id 主题详情</h4>
              <p>接收 get 参数</p>
              <ul>
                <li>mdrender <code>String</code> 当为<code>false</code>时，不渲染。默认为<code>true</code>，渲染出现的所有markdown 格式文档</li>
                <li>accesstoken <code>Sring</code> 当需要知道一个主题是否被收藏以及对应评论是否被特定用户点赞时，蔡旭带此参数。会影响返回值中的<code>is_collect</code>以及<code>replies</code>列表中的<code>is_uped</code>值</li>
              </ul>
              <p>示例：<a href="/">/api/v1/topic/5433d5e4e737cbe96dcef312</a></p>
              <h4>post/topic 新建主题</h4>
              <p>接收 post 参数</p>
              <ul>
                <li>accesstoken <code>String</code>用户的 accesstoken</li>
                <li>titlt <code>String</code>标题</li>
                <li>tab <code>String</code>目前有 <code>ask</code><code>share</code><code>job</code><code>dev</code>。开发新客户端的同学，请务必将你们的测试帖发在 <code>dev</code>专区，以免污染日常的版面，否则会进行封号一周处理。</li>
                <li>content <code>String</code>主体内容</li>
              </ul>
              <p>返回值示例</p>
              <pre>
                <code>
                  <span>{</span>
                  <span>success</span>
                  <span>:</span>
                  <span> </span>
                  <span>true</span>
                  <span>,</span>
                  <span>topic_id</span>
                  <span>:</span>
                  <span> </span>
                  <span> '5433d5e4e737cbe96dcef312 </span>
                  <span>}</span>
                </code>
              </pre>
              <h4>post.topics/update编辑主题</h4>
              <p>接收 post 参数</p>
              <ul>
                <li>accesstoken <code>Sring</code>用户的 accessToken</li>
                <li>topic_id <code>String</code>主题id</li>
                <li>title <code> String</code> 标题</li>
                <li>tab <code>String</code> 目前有<code>ask</code><code>share</code><code>job</code></li>
                <li>content <code>String</code> 主体内容</li>
              </ul>
              <p>返回值示例</p>
              <pre>
                <code>
                  <span>{</span>
                  <span>success</span>
                  <span> </span>
                  <span>true</span>
                  <span>,</span>
                  <span>topic_id</span>
                  <span>:</span>
                  <span></span>
                  <span>'5433d5e4e737cbe96dcef312'</span>
                  <span>}</span>
                </code>
              </pre>
              <h3>主体收藏</h3>
              <h4>post/topice_collect/collect收藏主题</h4>
              <p>接收 post 参数</p>
              <ul>
                <li>accesstoken <code>String</code> 用户的accesstoken</li>
                <li>topic_id <code>String</code> 主题的ID</li>
              </ul>
              <p>返回值示例</p>
              <pre>
                <code>
                  <span>{</span>
                  <span>success</span>
                  <span>:</span>
                  <span> </span>
                  <span>true</span>
                  <span>}</span>
                </code>
              </pre>
              <h4>get/topic_collect/:loginname</h4>
              <p>示例： <a href="/">/api/v1/topic_collect/alsotang</a></p>
              <h3>评论</h3>
              <h4>post/topic/:topic_id/replies新建的评论</h4>
              <p>接收 post 参数</p>
              <ul>
                <li>accesstoken <code>String</code>用户的 accesstoken</li>
                <li>content <code>String</code>评论的主体</li>
                <li>reply_id <code>String</code> 如果这个评论是对另一个评论的回复，请务必带上此字段，这样前端就可以构建出评论线索图</li>
              </ul>
              <p>返回值示例</p>
              <pre>
                <code>
                  <span>{</span>
                  <span>"success"</span>
                  <span>:</span>
                  <span> </span>
                  <span>true</span>
                  <span>,</span>
                  <span>reply_id</span>
                  <span>:</span>
                  <span>'5433d5e4e737cbe96dcef312'</span>
                  <span>}</span>
                </code>
              </pre>
              <h4>post/reply/:reply_id/ups为评论点赞</h4>
              <p>接收 post 参数</p>
              <ul>
                <li>accesstoken <code>String</code></li>
              </ul>
              <p>接口会自动判断用户是否已点赞，如果否，则点赞；如果是，则取消。点赞的动作反应在返回数据的 <code>action</code>字段中， <code>up</code>or <code>down</code>.</p>
              <p>返回值示例</p>
              <pre>
                <code>
                  <span>{</span>
                  <span>"success"</span>
                  <span>:</span>
                  <span> </span>
                  <span>true</span>
                  <span>,</span>
                  <span> </span>
                  <span>"action"</span>
                  <span>:</span>
                  <span> </span>
                  <span>"down"</span>
                  <span>}</span>
                </code>
              </pre>
              <h3>用户</h3>
              <h4>get/user/:loginname 用户详情</h4>
              <p>示例：<a href="/">/api/v1/user/alsotang</a></p>
              <h4>post/accesstoken 验证accessToken的正确性</h4>
              <p>接收 post 参数</p>
              <ul>
                <li>accesstoken <code>String</code>用户的accesstoken</li>
              </ul>
              <p>如果成功匹配上用户，返回成功信息，否则403。</p>
              <p>返回值示例</p>
              <pre>
                <code>
                  <span>{</span>
                  <span>"success"</span>
                  <span>:</span>
                  <span> </span>
                  <span>true</span>
                  <span>,</span>
                  <span> </span>
                  <span>loginname</span>
                  <span>:</span>
                  <span> </span>
                  <span>req</span>
                  <span>.</span>
                  <span>user</span>
                  <span>.</span>
                  <span>loginname</span>
                  <span>.</span>
                  <span>,</span>
                  <span> </span>
                  <span>id</span>
                  <span>:</span>
                  <span> </span>
                  <span>req</span>
                  <span>.</span>
                  <span>user</span>
                  <span>.</span>
                  <span>id</span>
                  <span>,</span>
                  <span>avatar_url</span>
                  <span>:</span>
                  <span> </span>
                  <span> req</span>
                  <span>.</span>
                  <span>user</span>
                  <span>.</span>
                  <span>avatar_url</span>
                  <span>}</span>
                </code>
              </pre>
              <h3>消息通知</h3>
              <h4>get/message/count 获取未读消息数</h4>
              <p>接收 get 参数</p>
              <ul>
                <li>accesstoken <code>String</code></li>
              </ul>
              <p>返回值示例</p>
              <pre>
                <code>
                  <span>{</span>
                  <span> </span>
                  <span>data</span>
                  <span>:</span>
                  <span> </span>
                  <span>3</span>
                  <span>}</span>
                </code>
              </pre>
              <h4>get/message获取已读和未读消息</h4>
              <p>接收 get 参数</p>
              <ul>
                <li>accesstoken <code>Steing</code></li>
                <li>mddrender <code>String</code> 当为 <code>false</code>时，不渲染。默认为 <code>true</code>渲染出现的所有markdown格式文档</li>
              </ul>
              <p>返回值示例</p>
              <pre>
                <code>
                </code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  components: {

  }
}
</script>

<style>
  .main {
    width: 90%;
    max-width: 1400px;
    min-width: 960px;
    margin: 15px auto;
    min-height: 400px;
  }
  .content {
    padding: 0;
    margin-right: 305px;
  }
  .c-panel {
    margin-top: 13px;
  }
  .header {
    padding: 10px;
    background-color: #f6f6f6;
    font-size: 14px;
    border-radius: 3px 3px 0 0;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
  }
  .branch {
    padding: 0;
    margin: 0;
    text-align: left;
  }
  .branch li {
    display: inline-block;
    line-height: 20px;
    list-style: none
  }
  .jump {
    color: #80bd01;
    text-decoration: none
  }
  .nov {
    color: #999;
  }
  .in-inner {
    border-top: 1px solid #e5e5e5;
    padding: 5px;
    background:#fff;
  }
  .topic-content {
    margin: 0 10px;
  }
  h3 {
    font-size: 24.5px;
    line-height: 40px;
  }
  .topic-content h3 {
    margin: 30px 0 15px;
    border-bottom: 1px solid #eee;
    text-align: left;
    color: inherit;
    font-weight: 700;
  }
  .markdown-text {
    text-align: left
  }
  .markdown-text>:first-child {
    margin-top: 0;
  }
  .markdown-text p {
    margin: 1em 0;
  }
  .markdown-text a {
    color: #08c;
  }
  .topic-content p {
    font-size: 15px;
    line-height: 1.7em;
    overflow: hidden;
  }
  .markdown-text ul {
    padding: 0;
    margin: 0 0 10px 25px;
  }
  .markdown-text ul li {
    line-height: 2em;
  }
  .markdown-text li code {
    color:#000;
    background-color: #fcfafa;
    padding: 4px 6px;
    border:none;
  }
  h4 {
    margin: 30px 0 15px;
    font-size: 17.5px;
    border-bottom: 1px solid #eee;
  }
</style>
