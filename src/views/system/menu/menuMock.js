const Mock = require('mockjs')

const icons = [
  'lock',
  'unlock',
  'bars',
  'book',
  'calendar',
  'cloud',
  'cloud-download',
  'code',
  'copy',
  'credit-card',
  'delete',
  'desktop',
  'download',
  'ellipsis',
  'file',
  'file-text',
  'file-unknown',
  'file-pdf',
  'file-word',
  'file-excel',
  'file-jpg',
  'file-ppt',
  'file-markdown',
  'file-add',
  'folder',
  'folder-open',
  'folder-add',
  'hdd',
  'frown',
  'meh',
  'smile',
  'inbox',
  'laptop',
  'appstore',
  'link',
  'mail',
  'mobile',
  'notification',
  'paper-clip',
  'picture',
  'poweroff',
  'reload',
  'search',
  'setting',
  'share-alt',
  'shopping-cart',
  'tablet',
  'tag',
  'tags',
  'to-top',
  'upload',
  'user',
  'video-camera',
  'home',
  'loading',
  'loading-3-quarters',
  'cloud-upload',
  'star',
  'heart',
  'environment',
  'eye',
  'camera',
  'save',
  'team',
  'solution',
  'phone',
  'filter',
  'exception',
  'export',
  'customer-service',
  'qrcode',
  'scan',
  'like',
  'dislike',
  'message',
  'pay-circle',
  'calculator',
  'pushpin',
  'bulb',
  'select',
  'switcher',
  'rocket',
  'bell',
  'disconnect',
  'database',
  'compass',
  'barcode',
  'hourglass',
  'key',
  'flag',
  'layout',
  'printer',
  'sound',
  'usb',
  'skin',
  'tool',
  'sync',
  'wifi',
  'car',
  'schedule',
  'user-add',
  'user-delete',
  'usergroup-add',
  'usergroup-delete',
  'man',
  'woman',
  'shop',
  'gift',
  'idcard',
  'medicine-box',
  'red-envelope',
  'coffee',
  'copyright',
  'trademark',
  'safety',
  'wallet',
  'bank',
  'trophy',
  'contacts',
  'global',
  'shake',
  'api',
  'fork',
  'dashboard',
  'table',
  'profile',
  'alert',
  'audit',
  'branches',
  'build',
  'border',
  'crown',
  'experiment',
  'fire',
  'money-collect',
  'property-safety',
  'read',
  'reconciliation',
  'rest',
  'security-scan',
  'insurance',
  'interation',
  'safety-certificate',
  'project',
  'thunderbolt',
  'block',
  'cluster',
  'deployment-unit',
  'dollar',
  'euro',
  'pound',
  'file-done',
  'file-exclamation',
  'file-protect',
  'file-search',
  'file-sync',
  'gateway',
  'gold',
  'robot',
  'shopping'
]

export default Mock.mock({ // ?????? list ???????????????????????????????????? 1 ??? 10 ?????????
  'list|20': [
    {
      'name': '@cname',
      'path': '/@word(5,10)',
      type: 'menu',
      'icon|1': icons,
      'sort|+1': 110,
      'remark': '@csentence(8,12)',
      'children|1-5': [
        {
          'name|1-4': '@cname',
          'path': '/@word(5,10)/@word(5,10)',
          type: 'subMenu',
          'icon|1': icons,
          'sort+1': 110,
          'remark': '@csentence(8,12)',
        }
      ]
    }
  ]
})
