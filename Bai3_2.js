function calculate(operation) {
    let num1, num2, result, elementId;

    switch (operation) {
        case 'add':
            num1 = parseFloat(document.getElementById('add1').value);
            num2 = parseFloat(document.getElementById('add2').value);
            result = num1 + num2;
            document.getElementById('addResult').value = result;
            elementId = 'recentAdd';
            break;
        case 'sub':
            num1 = parseFloat(document.getElementById('sub1').value);
            num2 = parseFloat(document.getElementById('sub2').value);
            result = num1 - num2;
            document.getElementById('subResult').value = result;
            elementId = 'recentSub';
            break;
        case 'mul':
            num1 = parseFloat(document.getElementById('mul1').value);
            num2 = parseFloat(document.getElementById('mul2').value);
            result = num1 * num2;
            document.getElementById('mulResult').value = result;
            elementId = 'recentMul';
            break;
        case 'div':
            num1 = parseFloat(document.getElementById('div1').value);
            num2 = parseFloat(document.getElementById('div2').value);
            if (num2 === 0) {
                alert("Không thể chia cho 0");
                return;
            }
            result = num1 / num2;
            document.getElementById('divResult').value = result;
            elementId = 'recentDiv';
            break;
    }

    // Cập nhật kết quả phép tính vừa thực hiện
    const resultElement = document.getElementById(elementId);
    resultElement.textContent = `${num1} ${operationSymbol(operation)} ${num2} = ${result}`;

    // Xóa lớp highlight cũ
    const oldHighlight = document.querySelector('.highlight');
    if (oldHighlight) {
        oldHighlight.classList.remove('highlight');
    }

    // Thêm highlight cho kết quả mới
    resultElement.classList.add('highlight');
}

function operationSymbol(operation) {
    switch (operation) {
        case 'add': return '+';
        case 'sub': return '-';
        case 'mul': return '*';
        case 'div': return '/';
        default: return '';
    }
}
