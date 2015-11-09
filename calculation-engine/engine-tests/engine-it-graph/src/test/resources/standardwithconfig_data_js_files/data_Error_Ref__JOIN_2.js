var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: 'ebd3fb43-3387-42de-994f-30c626e1c4f1', label: 'VALUE\n#REF!', color: '#31b0d5', title: 'Name: VALUE<br>Value: #REF!<br>Type: CONSTANT_VALUE<br>Id: ebd3fb43-3387-42de-994f-30c626e1c4f1<br>Formula Expression: Formula String: VALUE; Formula Values: #REF!; Formula Ptg: #REF!; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@3fde2209'},
{id: '0a21e5d8-92d2-4d22-9600-e36b0c38e9c4', label: 'E7\nA4', color: '#31b0d5', title: 'Name: E7<br>Value: A4<br>Type: CELL_WITH_FORMULA<br>Id: 0a21e5d8-92d2-4d22-9600-e36b0c38e9c4<br>Formula Expression: Formula String: D1; Formula Values: A4; Formula Ptg: A4; Ptgs: D1 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@3fde2209'},
{id: 'be7459d7-f903-4acf-94ef-350a18bc846a', label: 'E6\n#REF!', color: '#31b0d5', title: 'Name: E6<br>Value: #REF!<br>Type: CELL_WITH_FORMULA<br>Id: be7459d7-f903-4acf-94ef-350a18bc846a<br>Formula Expression: Formula String: VALUE; Formula Values: #REF!; Formula Ptg: #REF!; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@3fde2209'},
{id: '647f6460-c1a2-4c42-830a-e5424b168259', label: 'D1\nA4', color: '#31b0d5', title: 'Name: D1<br>Value: A4<br>Type: CELL_WITH_VALUE<br>Id: 647f6460-c1a2-4c42-830a-e5424b168259<br>Formula Expression: Formula String: D1; Formula Values: A4; Formula Ptg: A4; Ptgs: D1 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@3fde2209'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: 'ebd3fb43-3387-42de-994f-30c626e1c4f1', to: 'be7459d7-f903-4acf-94ef-350a18bc846a'},
{from: '647f6460-c1a2-4c42-830a-e5424b168259', to: '0a21e5d8-92d2-4d22-9600-e36b0c38e9c4'}
                            ]);