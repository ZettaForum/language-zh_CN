
export const translations = {
    "404page": {
        "page_not_found": "你访问的页面不存在，",
        "please": "请",
        "return": "返回",
        "or_search_for_related_content": "或搜索相关内容",
    },
    "search-box": {
        "placeholder": "搜索问题、话题或人",
        "search": "搜索",
    },
}

export default translations

if (top && top.ZettaForum) {
    top.ZettaForum.addTranslations("zh_CN", translations)
}
