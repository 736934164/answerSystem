// 题库解析脚本 - 修复重复解析问题
const fs = require('fs');
const { execSync } = require('child_process');

// 解析docx文件内容
function parseDocx(filePath) {
  try {
    const result = execSync(`unzip -p "${filePath}" word/document.xml 2>/dev/null | tr -d '\\n' | sed 's/<[^>]*>//g'`, { encoding: 'utf8' });
    return result;
  } catch {
    return '';
  }
}

// 解析所有题目
function parseAllQuestions(text, startId) {
  const questions = [];
  let id = startId;
  
  // 先找到所有题目块（以"一、单选题"、"二、多选题"、"三、判断题"分隔）
  const sections = text.split(/[一二三][、．]单选题|多选题|判断题/);
  
  // 处理单选题部分
  if (sections[1]) {
    const singleText = sections[1].split('二、多选题')[0] || sections[1];
    const singlePattern = /(\d+)[、．.]\s*([^A]+?)\s*A[、．.．:]\s*([^B]+?)\s*B[、．.．:]\s*([^C]+?)\s*C[、．.．:]\s*([^D]+?)\s*D[、．.．:]\s*([^答案]+?)\s*答案[：:]\s*([A-D])/g;
    
    let match;
    while ((match = singlePattern.exec(singleText)) !== null) {
      questions.push({
        id: id++,
        content: match[2].trim().replace(/\s+/g, ' '),
        type: 'single',
        options: [
          { key: 'A', content: match[3].trim().replace(/\s+/g, ' ') },
          { key: 'B', content: match[4].trim().replace(/\s+/g, ' ') },
          { key: 'C', content: match[5].trim().replace(/\s+/g, ' ') },
          { key: 'D', content: match[6].trim().replace(/\s+/g, ' ') }
        ],
        answer: [match[7].trim()]
      });
    }
  }
  
  // 处理多选题部分
  if (sections[2]) {
    const multiText = sections[2].split('三、判断题')[0] || sections[2];
    const multiPattern = /(\d+)[、．.]\s*([^A]+?)\s*A[、．.．:]\s*([^B]+?)\s*B[、．.．:]\s*([^C]+?)\s*C[、．.．:]\s*([^D]+?)\s*D[、．.．:]\s*([^答案]+?)\s*答案[：:]\s*([A-E]+)/g;
    
    let match;
    while ((match = multiPattern.exec(multiText)) !== null) {
      const answer = match[7].trim();
      // 只处理多个字母的答案（多选题）
      if (answer.length > 1) {
        questions.push({
          id: id++,
          content: match[2].trim().replace(/\s+/g, ' '),
          type: 'multi',
          options: [
            { key: 'A', content: match[3].trim().replace(/\s+/g, ' ') },
            { key: 'B', content: match[4].trim().replace(/\s+/g, ' ') },
            { key: 'C', content: match[5].trim().replace(/\s+/g, ' ') },
            { key: 'D', content: match[6].trim().replace(/\s+/g, ' ') }
          ],
          answer: answer.split('')
        });
      }
    }
  }
  
  // 处理判断题部分
  if (sections[3]) {
    const judgeText = sections[3];
    const judgePattern = /(\d+)[、．.]\s*([^（(]+?)\s*[（(]\s*[）)]\s*A[、．.．:]\s*正确\s*B[、．.．:]\s*错误\s*答案[：:]\s*([A-B])/g;
    
    let match;
    while ((match = judgePattern.exec(judgeText)) !== null) {
      questions.push({
        id: id++,
        content: match[2].trim().replace(/\s+/g, ' '),
        type: 'judge',
        options: [
          { key: 'A', content: '正确' },
          { key: 'B', content: '错误' }
        ],
        answer: [match[3].trim()]
      });
    }
  }
  
  return { questions, nextId: id };
}

// 主函数
async function main() {
  const files = [
    { path: '/Users/yangjie/Desktop/b1b74e26b0dacb9c01390a6034c686e6.docx', category: 'safety-management' },
    { path: '/Users/yangjie/Desktop/9524111d64bab48dc4b9f1d5071c3da1.docx', category: 'laws' },
    { path: '/Users/yangjie/Desktop/8f68ef732a5912ad5a272e59eea430bf.docx', category: 'civil-engineering' },
    { path: '/Users/yangjie/Desktop/附件4：安全生产月知识竞赛参考题库及参考答案（机械设备安全技术）.docx', category: 'mechanical' }
  ];

  let allQuestions = [];
  let currentId = 1;
  const categoryMap = {};

  for (const file of files) {
    console.log(`解析: ${file.path}`);
    const text = parseDocx(file.path);
    const result = parseAllQuestions(text, currentId);
    
    categoryMap[file.category] = result.questions.map(q => q.id);
    allQuestions = [...allQuestions, ...result.questions];
    currentId = result.nextId;
    
    const singleCount = result.questions.filter(q => q.type === 'single').length;
    const multiCount = result.questions.filter(q => q.type === 'multi').length;
    const judgeCount = result.questions.filter(q => q.type === 'judge').length;
    
    console.log(`  单选题: ${singleCount}`);
    console.log(`  多选题: ${multiCount}`);
    console.log(`  判断题: ${judgeCount}`);
    console.log(`  总计: ${result.questions.length}`);
  }

  console.log(`\n总题目数: ${allQuestions.length}`);
  
  // 生成输出
  const output = `export interface Question {
  id: number;
  content: string;
  type: 'single' | 'multi' | 'judge';
  options: { key: string; content: string }[];
  answer: string[];
}

export interface Category {
  id: string;
  name: string;
  description: string;
  questionCount: number;
  icon: string;
}

export const categories: Category[] = [
  { id: 'safety-management', name: '安全管理', description: '安全生产管理相关知识', questionCount: ${categoryMap['safety-management']?.length || 0}, icon: 'shield' },
  { id: 'laws', name: '法律法规', description: '安全生产法律法规知识', questionCount: ${categoryMap['laws']?.length || 0}, icon: 'book' },
  { id: 'civil-engineering', name: '土建综合安全技术', description: '土建工程安全技术知识', questionCount: ${categoryMap['civil-engineering']?.length || 0}, icon: 'building' },
  { id: 'mechanical', name: '机械设备安全技术', description: '机械设备安全操作知识', questionCount: ${categoryMap['mechanical']?.length || 0}, icon: 'cog' },
  { id: 'all', name: '综合题库', description: '包含所有类型题目', questionCount: ${allQuestions.length}, icon: 'layers' }
];

export const categoryQuestionMap = ${JSON.stringify(categoryMap, null, 2)};

export function getQuestionIdsByCategory(categoryId: string): number[] {
  if (categoryId === 'all') {
    return ${JSON.stringify(allQuestions.map(q => q.id))};
  }
  return categoryQuestionMap[categoryId] || [];
}

export const questions: Question[] = ${JSON.stringify(allQuestions, null, 2)};`;

  fs.writeFileSync('/tmp/all-questions.ts', output);
  console.log('已生成: /tmp/all-questions.ts');
}

main().catch(console.error);