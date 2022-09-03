/*
 * 接口统一集成模块，导出的变量名，约束为驼峰命名风格
 */
// 登录
import * as login from './modules/sys/login'
// 用户管理
import * as user from './modules/sys/user'
// 机构管理
import * as dept from './modules/sys/dept'
// 角色管理
import * as role from './modules/sys/role'
// 菜单管理
import * as menu from './modules/sys/menu'
// 字典管理
import * as dict from './modules/sys/dict'
// 岗位管理
import * as post from './modules/sys/post'
// 日志管理
import * as log from './modules/sys/log'
// 登录日志
import * as loginLog from './modules/sys/login-log'
// 系统设置
import * as settings from './modules/sys/settings'
// 附件管理
import * as attach from './modules/sys/attach'
// TODO 在下面累加你自己的业务js即可

// 默认全部导出
export default {
  login, user, dept, role, menu, dict, post, log, loginLog, settings, attach
  // TODO 在这累加上面你自己定义的名称即可
}
