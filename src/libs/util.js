let util = {

};
util.title = function (title) {
    title = title ? title + ' - Home' : 'iView project';
    window.document.title = title;
};
export const getMenuByList = (list) => {
  let res = []
  forEach(list, item => {
    if (!item.meta || (item.meta && !item.meta.hideInMenu)) {
      let obj = {
        icon: (item.meta && item.meta.icon) || '',
        name: item.name,
        meta: item.meta
      }
      if ((hasChild(item) || (item.meta && item.meta.showAlways)) && showThisMenuEle(item)) {
        obj.children = getMenuByRouter(item.children)
      }
      if (item.meta && item.meta.href) obj.href = item.meta.href
      if (showThisMenuEle(item)) res.push(obj)
    }
  })
  return res
}

export const showTitle = (item, vm) => {
  let { title, __titleIsFunction__ } = item.meta
  if (!title) return
  if (useI18n) {
    if (title.includes('{{') && title.includes('}}') && useI18n) title = title.replace(/({{[\s\S]+?}})/, (m, str) => str.replace(/{{([\s\S]*)}}/, (m, _) => vm.$t(_.trim())))
    else if (__titleIsFunction__) title = item.meta.title
    else title = vm.$t(item.name)
  } else title = (item.meta && item.meta.title) || item.name
  return title
}

export default util;