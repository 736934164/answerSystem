// 题库解析脚本 - 从原始文本解析题目数据
// 使用方法: node parse-questions.js

const fs = require('fs');

// 解析单选题
function parseSingleQuestions(text, startId) {
  const questions = [];
  // 匹配模式: 数字、题目内容、选项A-D、答案
  const pattern = /(\d+)[、．.]\s*([^\n]+?)\s*A[、．.．:]\s*([^\n]+?)\s*B[、．.．:]\s*([^\n]+?)\s*C[、．.．:]\s*([^\n]+?)\s*D[、．.．:]\s*([^\n]+?)\s*答案[：:]\s*([A-D])/g;
  
  let match;
  let id = startId;
  while ((match = pattern.exec(text)) !== null) {
    questions.push({
      id: id++,
      content: match[2].trim(),
      type: 'single',
      options: [
        { key: 'A', content: match[3].trim() },
        { key: 'B', content: match[4].trim() },
        { key: 'C', content: match[5].trim() },
        { key: 'D', content: match[6].trim() }
      ],
      answer: [match[7].trim()]
    });
  }
  return questions;
}

// 解析多选题
function parseMultiQuestions(text, startId) {
  const questions = [];
  // 多选题答案可能是多个字母
  const pattern = /(\d+)[、．.]\s*([^\n]+?)\s*A[、．.．:]\s*([^\n]+?)\s*B[、．.．:]\s*([^\n]+?)\s*C[、．.．:]\s*([^\n]+?)\s*D[、．.．:]\s*([^\n]+?)\s*(E[、．.．:]\s*([^\n]+?)\s*)?答案[：:]\s*([A-E]+)/g;
  
  let match;
  let id = startId;
  while ((match = pattern.exec(text)) !== null) {
    const options = [
      { key: 'A', content: match[3].trim() },
      { key: 'B', content: match[4].trim() },
      { key: 'C', content: match[5].trim() },
      { key: 'D', content: match[6].trim() }
    ];
    if (match[8]) {
      options.push({ key: 'E', content: match[8].trim() });
    }
    questions.push({
      id: id++,
      content: match[2].trim(),
      type: 'multi',
      options,
      answer: match[9].trim().split('')
    });
  }
  return questions;
}

// 解析判断题
function parseJudgeQuestions(text, startId) {
  const questions = [];
  const pattern = /(\d+)[、．.]\s*([^\n]+?)\s*[（(]\s*[）)]\s*A[、．.．:]\s*正确\s*B[、．.．:]\s*错误\s*答案[：:]\s*([A-B])/g;
  
  let match;
  let id = startId;
  while ((match = pattern.exec(text)) !== null) {
    questions.push({
      id: id++,
      content: match[2].trim(),
      type: 'judge',
      options: [
        { key: 'A', content: '正确' },
        { key: 'B', content: '错误' }
      ],
      answer: [match[3].trim()]
    });
  }
  return questions;
}

console.log('题库解析脚本已准备');
console.log('请手动运行解析或使用以下命令获取题目:');
console.log('cat /tmp/*.txt | grep "答案"');