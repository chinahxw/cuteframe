-- 2014-12-17 by yangfuyou

--
-- Database: `cuteframe`
--

-- --------------------------------------------------------

--
-- 表的结构 `operation`
--

CREATE TABLE IF NOT EXISTS `operation` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT COMMENT '主键id',
  `method_name` varchar(30) NOT NULL COMMENT '方法名称',
  `label` varchar(30) NOT NULL COMMENT '显示标识',
  `c_id` int(11) NOT NULL COMMENT '所属控制器',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COMMENT='操作表' AUTO_INCREMENT=35 ;

--
-- 转存表中的数据 `operation`
--

INSERT INTO `operation` (`id`, `method_name`, `label`, `c_id`) VALUES
(1, 'index', '搜索框', 1),
(2, 'search', '数据列表', 1),
(3, 'index', '数据列表', 6),
(4, 'index', '数据列表', 2),
(5, 'index', '搜索框', 4),
(6, 'index', '数据列表', 5),
(7, 'index', '搜索框', 7),
(8, 'index', '搜索框', 3),
(9, 'index', '搜索框', 8),
(10, 'index', '数据列表', 9),
(11, 'index', '搜索框', 10),
(12, 'recycle', '用户回收站', 10),
(13, 'index', '搜索框', 11),
(14, 'index', '数据列表', 12),
(15, 'index', '搜索框', 13),
(16, 'add', '添加项目', 1),
(17, 'index', '搜索框', 14),
(18, 'index', '搜索框', 15),
(19, 'index', '数据列表', 16),
(20, 'edit', '编辑', 1),
(21, 'show', '详情', 1),
(22, 'insert', '保存', 1),
(23, 'update', '更新', 1),
(24, 'delete', '删除', 1),
(25, 'moveup', '上移', 1),
(26, 'movedown', '下移', 1),
(27, 'search', '数据列表', 5),
(28, 'add', '添加', 5),
(29, 'edit', '编辑', 5),
(30, 'show', '详情', 5),
(31, 'insert', '保存', 5),
(32, 'update', '更新', 5),
(33, 'delete', '删除', 5),
(34, 'index', '搜索框', 17);

-- 2014-12-19 add yangfuyou

TRUNCATE TABLE `operation` ;

INSERT INTO `operation` (`id`, `method_name`, `label`, `c_id`) VALUES
(1, 'index', '默认页', 1),
(2, 'search', '数据分页', 1),
(3, 'index', '默认页', 6),
(4, 'index', '默认页', 2),
(5, 'index', '默认页', 4),
(6, 'index', '默认页', 5),
(7, 'index', '默认页', 7),
(8, 'index', '默认页', 3),
(9, 'index', '默认页', 8),
(10, 'index', '默认页', 9),
(11, 'index', '默认页', 10),
(12, 'recycle', '用户回收站默认页', 10),
(13, 'index', '默认页', 11),
(14, 'index', '默认页', 12),
(15, 'index', '默认页', 13),
(16, 'add', '添加项目', 1),
(17, 'index', '默认页', 14),
(18, 'index', '默认页', 15),
(19, 'index', '默认页', 16),
(20, 'edit', '编辑', 1),
(21, 'show', '详情', 1),
(22, 'insert', '保存', 1),
(23, 'update', '更新', 1),
(24, 'delete', '删除', 1),
(25, 'moveup', '上移', 1),
(26, 'movedown', '下移', 1),
(27, 'search', '数据分页', 5),
(28, 'add', '添加', 5),
(29, 'edit', '编辑', 5),
(30, 'show', '详情', 5),
(31, 'insert', '保存', 5),
(32, 'update', '更新', 5),
(33, 'delete', '删除', 5),
(34, 'index', '默认页', 17),
(35, 'search', '数据分页', 3),
(36, 'add', '添加', 3),
(37, 'edit', '编辑', 3),
(38, 'save', '保存', 3),
(39, 'update', '更新', 3),
(40, 'delete', '删除', 3),
(41, 'search', '数据分页', 2),
(42, 'add', '添加', 2),
(43, 'edit', '编辑', 2),
(44, 'insert', '保存', 2),
(45, 'update', '更新', 2),
(46, 'delete', '删除', 2),
(47, 'show', '详情', 3),
(48, 'search', '数据分页', 4),
(49, 'add', '添加', 4),
(50, 'edit', '编辑', 4),
(51, 'show', '详情', 4),
(52, 'insert', '保存', 4),
(53, 'update', '更新', 4),
(54, 'delete', '删除', 4),
(55, 'dictList', '字典列表', 6),
(56, 'add', '字典添加', 6),
(57, 'edit', '字典编辑', 6),
(58, 'delete', '字典删除', 6),
(59, 'insert', '保存字典', 6),
(60, 'update', '更新字典', 6),
(61, 'search', '字典明细', 6),
(62, 'addItem', '添加字典明细', 6),
(63, 'editItem', '编辑字典明细', 6),
(64, 'deleteItem', '删除字典明细', 6),
(65, 'insertItem', '保存字典明细', 6),
(66, 'updateItem', '更新字典明细', 6),
(67, 'moveup', '上移', 4),
(68, 'movedown', '下移', 4),
(69, 'search', '数据分页', 7),
(70, 'add', '添加', 7),
(71, 'edit', '编辑', 7),
(72, 'insert', '保存', 7),
(73, 'update', '更新', 7),
(74, 'delete', '删除', 7),
(75, 'moveup', '上移', 7),
(76, 'movedown', '下移', 7),
(77, 'layoutButton', '分配按钮', 7),
(78, 'saveButton', '分配按钮保存', 7),
(79, 'listButton', '按钮排序页面', 7),
(80, 'saveSort', '保存排序', 7),
(81, 'search', '数据分页', 8),
(82, 'add', '添加', 8),
(83, 'edit', '编辑', 8),
(84, 'delete', '删除', 8),
(85, 'show', '详情', 8),
(86, 'insert', '保存', 8),
(87, 'update', '更新', 8),
(88, 'search', '数据列表', 9),
(89, 'add', '添加', 9),
(90, 'edit', '编辑', 9),
(91, 'delete', '删除', 9),
(92, 'show', '详情', 9),
(93, 'insert', '保存', 9),
(94, 'update', '更新', 9),
(95, 'moveup', '上移', 9),
(96, 'movedown', '下移', 9),
(97, 'search', '数据分页', 10),
(98, 'add', '添加', 10),
(99, 'edit', '编辑', 10),
(100, 'show', '详情', 10),
(101, 'modify', '重置密码', 10),
(102, 'setModify', '保存密码', 10),
(103, 'insert', '保存', 10),
(104, 'update', '更新', 10),
(105, 'setEnabled', '生效', 10),
(106, 'setDisabled', '失效', 10),
(107, 'setLeave', '离职', 10),
(108, 'setOnWork', '入职', 10),
(109, 'delete', '删除', 10),
(110, 'recover', '恢复', 10),
(111, 'recycleList', '用户回收站分页', 10),
(112, 'search', '数据分页', 11),
(113, 'add', '添加', 11),
(114, 'edit', '编辑', 11),
(115, 'delete', '删除', 11),
(116, 'insert', '保存', 11),
(117, 'update', '更新', 11),
(118, 'search', '数据列表', 12),
(119, 'add', '添加', 12),
(120, 'edit', '编辑', 12),
(121, 'delete', '删除', 12),
(122, 'insert', '保存', 12),
(123, 'update', '更新', 12),
(124, 'search', '数据分页', 13),
(125, 'search', '数据分页', 14),
(126, 'add', '添加', 14),
(127, 'edit', '编辑', 14),
(128, 'delete', '删除', 14),
(129, 'insert', '保存', 14),
(130, 'update', '更新', 14),
(131, 'search', '数据列表', 16),
(132, 'add', '添加', 16),
(133, 'edit', '编辑', 16),
(134, 'delete', '删除', 16),
(135, 'show', '详情', 16),
(136, 'insert', '保存', 16),
(137, 'update', '更新', 16),
(138, 'moveup', '上移', 16),
(139, 'movedown', '下移', 16),
(140, 'search', '数据分页', 17),
(141, 'add', '添加', 17),
(142, 'edit', '编辑', 17),
(143, 'delete', '删除', 17),
(144, 'insert', '保存', 17),
(145, 'update', '更新', 17),
(146, 'index', '默认页', 18),
(147, 'search', '数据分页', 18),
(148, 'add', '添加', 18),
(149, 'edit', '编辑', 18),
(150, 'delete', '删除', 18),
(151, 'listAll', '排序', 18),
(152, 'insert', '保存', 18),
(153, 'update', '更新', 18),
(154, 'saveSort', '保存排序', 18),
(155, 'index', '默认页', 19),
(156, 'search', '数据分页', 19),
(157, 'add', '添加', 19),
(158, 'edit', '编辑', 19),
(159, 'delete', '删除', 19),
(160, 'insert', '保存', 19),
(161, 'update', '更新', 19),
(162, 'listAll', '排序', 19),
(163, 'saveSort', '保存排序', 19);

-- 2014-12-20 add yangfuyou

INSERT INTO `operation` (`id`, `method_name`, `label`, `c_id`) VALUES
(164, 'index', '默认页', 20),
(165, 'search', '数据分页', 20),
(166, 'add', '添加', 20),
(167, 'edit', '编辑', 20),
(168, 'delete', '删除', 20),
(169, 'insert', '保存', 20),
(170, 'update', '更新', 20);

-- 2014-12-21 add yangfuyou

INSERT INTO `operation` (`id`, `method_name`, `label`, `c_id`) VALUES
(171, 'index', '默认页', 21),
(172, 'search', '数据列表', 21),
(173, 'add', '添加资源类型', 21),
(174, 'edit', '编辑资源类型', 21),
(175, 'delete', '删除资源类型', 21),
(176, 'insert', '保存资源类型', 21),
(177, 'update', '更新资源类型', 21);

-- 2014-12-22 add yangfuyou

INSERT INTO `operation` (`id`, `method_name`, `label`, `c_id`) VALUES
(178, 'index', '默认页', 22),
(179, 'add', '添加', 22),
(180, 'search', '数据分页', 22),
(181, 'delete', '删除', 22),
(182, 'insert', '保存', 22);

-- 2014-12-25 add yangfuyou

INSERT INTO `operation` (`id`, `method_name`, `label`, `c_id`) VALUES
(183, 'index', '默认页', 23),
(184, 'index', '默认页', 24);