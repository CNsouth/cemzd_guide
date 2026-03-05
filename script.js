const intro = introJs();

intro.setOptions({
    steps: [
        { element: '#step1-target', title: '第一步', intro: '点击上传按钮，准备上传', position: 'bottom' },
        { element: '#step2-target', title: '第二步', intro: '现在进入了上传界面', position: 'bottom' },
        { element: '#step3-target', title: '第三步', intro: '上传 -> 上传指定压缩包', position: 'right' },
        { element: '#step4-target', title: '第四步', intro: '选择打包好的数据包', position: 'bottom' },
        { element: '#step5-target', title: '第五步', intro: '等待压缩包上传完成', position: 'bottom' },
        { element: '#step6-target', title: '第六步', intro: '上传完成后，主页将显示上传完成的批次，等待批次处理完成', position: 'bottom' },
        { element: '#step7-target', title: '第七步', intro: '批次处理完成，会显示为已完成', position: 'bottom' },
        { element: '#step8-target', title: '第八步', intro: '处理完成的批次即可点击查看样品列表', position: 'bottom' },
        { element: '#step9-target', title: '第九步', intro: '进入样品列表查看页面', position: 'bottom' },
        { element: '#step10-target', title: '第十步', intro: '完成审查后，可以关闭样品列表。', position: 'left' },
        { element: '#step11-target', title: '第十一步', intro: '完成审查的批次显示为绿色标识', position: 'left' },
        { element: '#step12-target', title: '第十二步', intro: '点击管理按钮，进行批次管理', position: 'bottom' },
        { element: '#step13-target', title: '第十三步', intro: '进入管理界面', position: 'bottom' },
        { element: '#step14-target', title: '第十四步', intro: '选择需要删除的批次', position: 'right' },
        { element: '#step15-target', title: '第十五步', intro: '确认删除', position: 'bottom' },
        { element: '#step16-target', title: '第十六步', intro: '删除后，可以在回收站，查看删除的批次数据', position: 'bottom' },
        { element: '#step17-target', title: '第十七步', intro: '进入回收站页面', position: 'bottom' },
        { element: '#step18-target', title: '第十八步', intro: '这里是刚才删除的两个批次', position: 'bottom' },
        { element: '#step19-target', title: '第十九步', intro: '勾选批次，进行恢复操作', position: 'right' },
        { element: '#step20-target', title: '第二十步', intro: '确认从回收站恢复', position: 'bottom' },
        { element: '#step21-target', title: '第二十一步', intro: '回到主界面，可以看到批次已经恢复。', position: 'bottom' },
        { element: '#step22-target', title: '第二十二步', intro: '点击导出按钮', position: 'bottom' },
        { element: '#step23-target', title: '第二十三步', intro: '进入导出页面。', position: 'bottom' },
        { element: '#step24-target', title: '第二十四步', intro: '选择需要导出的批次。', position: 'left' },
        { element: '#step25-target', title: '第二十五步', intro: '点击导出。', position: 'left' },
        // 【新增】第26-31步
        { element: '#step26-target', title: '第二十六步', intro: '选择导出路径。', position: 'bottom' },
        { element: '#step27-target', title: '第二十七步', intro: '设置保存文件名称。', position: 'top' },
        { element: '#step28-target', title: '第二十八步', intro: '点击保存按钮。', position: 'top' },
        { element: '#step29-target', title: '第二十九步', intro: '保存成功。', position: 'bottom' },
        { element: '#step30-target', title: '第三十步', intro: '打开路径即可查看到导出的文件。', position: 'bottom' },
        { element: '#step31-target', title: '第三十一步', intro: '打开即可查看', position: 'bottom' }
    ],
    nextLabel: '下一步',
    prevLabel: '上一步',
    doneLabel: '结束演示',
    showProgress: true,
    exitOnOverlayClick: false,
    disableInteraction: true
});

// 辅助函数：一键把所有框设为透明，再单独点亮需要的那一个
function highlightOnly(targetId) {
    // 选出所有的 hotspot 元素
    let allHotspots = document.querySelectorAll('.hotspot');
    // 全部设为透明
    allHotspots.forEach(el => el.style.borderColor = 'transparent');
    // 如果传入了目标 ID，则将其设为红色
    if (targetId) {
        document.getElementById(targetId).style.borderColor = 'red';
    }
}

intro.onbeforechange(function(targetElement) {
    let img = document.getElementById('app-image');
    let id = targetElement.id;

    // 根据目标 ID 切换对应的图片和红框
    if (id === 'step1-target') {
        img.src = 'images/main_1.png';
        highlightOnly('step1-target');
    } 
    else if (id === 'step2-target') {
        img.src = 'images/upload_1.png';
        highlightOnly('step2-target');
    } 
    else if (id === 'step3-target') {
        img.src = 'images/upload_2.png';
        highlightOnly('step3-target');
    }
    else if (id === 'step4-target') {
        img.src = 'images/upload_select_zip.png';
        highlightOnly('step4-target');
    }
    else if (id === 'step5-target') {
        img.src = 'images/upload_3.png';
        highlightOnly('step5-target');
    }
    else if (id === 'step6-target') {
        img.src = 'images/main_2.png';
        highlightOnly('step6-target');
    }
    else if (id === 'step7-target') {
        img.src = 'images/main_3.png';
        highlightOnly('step7-target');
    }
    else if (id === 'step8-target') {
        // 第 7 步和第 8 步使用的是同一张图片，只需要换红框位置
        img.src = 'images/main_3.png';
        highlightOnly('step8-target');
    }
    // 第九步换图逻辑
    else if (id === 'step9-target') {
        img.src = 'images/sample_1.png';
        highlightOnly('step9-target');
    }
    // 【新增】第十步换图逻辑
    else if (id === 'step10-target') {
        img.src = 'images/sample_1.png'; // 图片依然是 sample_1.png
        highlightOnly('step10-target');
    }
    // 【新增】第十一步换图逻辑
    else if (id === 'step11-target') {
        img.src = 'images/main_4.png';
        highlightOnly('step11-target');
    }
    // 【新增】第十二步换图逻辑
    else if (id === 'step12-target') {
        img.src = 'images/main_4.png'; // 图片依然是 main_4.png
        highlightOnly('step12-target');
    }
    // 【新增】第 13 步到第 16 步的换图逻辑
    else if (id === 'step13-target') {
        img.src = 'images/manage_1.png';  // 只有第13步是 manage_1
        highlightOnly('step13-target');
    }
    else if (id === 'step14-target') {
        img.src = 'images/manage_2.png';  // 从这里开始切换为 manage_2
        highlightOnly('step14-target');
    }
    else if (id === 'step15-target') {
        img.src = 'images/manage_2.png';
        highlightOnly('step15-target');
    }
    else if (id === 'step16-target') {
        img.src = 'images/manage_2.png';
        highlightOnly('step16-target');
    }
    else if (id === 'step16-target') {
        img.src = 'images/manage_2.png';
        highlightOnly('step16-target');
    }
    
    // 【新增】第 17 步到第 20 步的换图逻辑
    else if (id === 'step17-target') {
        img.src = 'images/manage_4.png';  // 第17步是 manage_4
        highlightOnly('step17-target');
    }
    else if (id === 'step18-target') {
        img.src = 'images/manage_5.png';  // 从这里开始切换为 manage_5
        highlightOnly('step18-target');
    }
    else if (id === 'step19-target') {
        img.src = 'images/manage_5.png';
        highlightOnly('step19-target');
    }
    else if (id === 'step20-target') {
        img.src = 'images/manage_5.png';
        highlightOnly('step20-target');
    }
    else if (id === 'step21-target') {
        img.src = 'images/manage_6.png';  // 切换为 manage_6
        highlightOnly('step21-target');
    }
    else if (id === 'step22-target') {
        img.src = 'images/main_6.png';  // 切换为 main_6.png
        highlightOnly('step22-target');
    }
    // 【新增】第 23 到 25 步的换图逻辑
    else if (id === 'step23-target') {
        img.src = 'images/export_1.png';  // 切换为 export_1.png
        highlightOnly('step23-target');
    }
    else if (id === 'step24-target') {
        img.src = 'images/export_1.png';  
        highlightOnly('step24-target');
    }
    else if (id === 'step25-target') {
        img.src = 'images/export_1.png';  
        highlightOnly('step25-target');
    }
    // 【新增】第 26 到 31 步的换图逻辑
    else if (id === 'step26-target') {
        img.src = 'images/export_2.png';  // 切换为 export_2.png
        highlightOnly('step26-target');
    }
    else if (id === 'step27-target') {
        img.src = 'images/export_2.png';
        highlightOnly('step27-target');
    }
    else if (id === 'step28-target') {
        img.src = 'images/export_2.png';
        highlightOnly('step28-target');
    }
    else if (id === 'step29-target') {
        img.src = 'images/export_3.png';  // 切换为 export_3.png (弹窗)
        highlightOnly('step29-target');
    }
    else if (id === 'step30-target') {
        img.src = 'images/export_4.png';  // 切换为 export_4.png (文件夹)
        highlightOnly('step30-target');
    }
    else if (id === 'step31-target') {
        img.src = 'images/export_5.png';  // 切换为 export_5.png (Excel表格)
        highlightOnly('step31-target');
    }
});

// 刷新气泡位置，防止跳动
intro.onafterchange(function() {
    setTimeout(() => {
        intro.refresh(true);
    }, 150);
});

// 启动引导
window.onload = function() {
    setTimeout(() => {
        intro.start();
    }, 500);
};