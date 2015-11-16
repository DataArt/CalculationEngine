var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: 'aa9978db-b2e4-47e5-a614-d6d1ba1df29c', label: 'D5\n4.0', color: '#31b0d5', title: 'Name: D5<br>Value: 4.0<br>Type: CELL_WITH_FORMULA<br>Id: aa9978db-b2e4-47e5-a614-d6d1ba1df29c<br>Formula Expression: Formula String: HLOOKUP(VALUE, VALUE, A1:C4, VALUE); Formula Values: HLOOKUP(TRUE, 2.0, Alt, CTRL, Bolt, 4.0, 4.0, 9.0, 5.0, 7.0, 10.0, 6.0, 8.0, 11.0, Alt); Formula Ptg: TRUE, 2.0, Alt, CTRL, Bolt, 4.0, 4.0, 9.0, 5.0, 7.0, 10.0, 6.0, 8.0, 11.0, Alt HLOOKUP ; Ptgs: VALUE, VALUE, A1:C4, VALUE HLOOKUP  Index in Ptgs: 4 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@5afef53'},
{id: '56bf0705-0fcf-48f7-a9ff-3697d38b9397', label: 'VALUE\n2.0', color: '#31b0d5', title: 'Name: VALUE<br>Value: 2.0<br>Type: CONSTANT_VALUE<br>Id: 56bf0705-0fcf-48f7-a9ff-3697d38b9397<br>Formula Expression: Formula String: VALUE; Formula Values: 2.0; Formula Ptg: 2.0; Ptgs: VALUE Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@5afef53'},
{id: '70c9e766-a7a5-43aa-8c48-b1926acf1d40', label: 'HLOOKUP\n4.0', color: '#f0ad4e', title: 'Name: HLOOKUP<br>Value: 4.0<br>Type: FUNCTION<br>Id: 70c9e766-a7a5-43aa-8c48-b1926acf1d40<br>Formula Expression: Formula String: HLOOKUP(VALUE, VALUE, A1:C4, VALUE); Formula Values: HLOOKUP(TRUE, 2.0, Alt, CTRL, Bolt, 4.0, 4.0, 9.0, 5.0, 7.0, 10.0, 6.0, 8.0, 11.0, Alt); Formula Ptg: ; Ptgs:  Index in Ptgs: 4 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@5afef53'},
{id: '0ff96b0e-991f-480f-a42e-3e1853659f19', label: 'A1:C4\n...', color: '#31b0d5', title: 'Name: A1:C4<br>Value: [[Alt, CTRL, Bolt], [4.0, 4.0, 9.0], [5.0, 7.0, 10.0], [6.0, 8.0, 11.0]]<br>Type: RANGE<br>Id: 0ff96b0e-991f-480f-a42e-3e1853659f19<br>Formula Expression: Formula String: A1:C4; Formula Values: [[Alt, CTRL, Bolt], [4.0, 4.0, 9.0], [5.0, 7.0, 10.0], [6.0, 8.0, 11.0]]; Formula Ptg: [[Alt, CTRL, Bolt], [4.0, 4.0, 9.0], [5.0, 7.0, 10.0], [6.0, 8.0, 11.0]]; Ptgs: A1:C4 Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@5afef53'},
{id: '3b5142a0-62b8-40ac-addd-256960cba294', label: 'VALUE\nTRUE', color: '#31b0d5', title: 'Name: VALUE<br>Value: TRUE<br>Type: CONSTANT_VALUE<br>Id: 3b5142a0-62b8-40ac-addd-256960cba294<br>Formula Expression: Formula String: VALUE; Formula Values: TRUE; Formula Ptg: TRUE; Ptgs: VALUE Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@5afef53'},
{id: '5107d7fb-6e9a-4872-95bf-65701c5e2cb1', label: 'VALUE\nAlt', color: '#31b0d5', title: 'Name: VALUE<br>Value: Alt<br>Type: CONSTANT_VALUE<br>Id: 5107d7fb-6e9a-4872-95bf-65701c5e2cb1<br>Formula Expression: Formula String: VALUE; Formula Values: Alt; Formula Ptg: Alt; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@5afef53'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '56bf0705-0fcf-48f7-a9ff-3697d38b9397', to: '70c9e766-a7a5-43aa-8c48-b1926acf1d40'},
{from: '70c9e766-a7a5-43aa-8c48-b1926acf1d40', to: 'aa9978db-b2e4-47e5-a614-d6d1ba1df29c'},
{from: '3b5142a0-62b8-40ac-addd-256960cba294', to: '70c9e766-a7a5-43aa-8c48-b1926acf1d40'},
{from: '0ff96b0e-991f-480f-a42e-3e1853659f19', to: '70c9e766-a7a5-43aa-8c48-b1926acf1d40'},
{from: '5107d7fb-6e9a-4872-95bf-65701c5e2cb1', to: '70c9e766-a7a5-43aa-8c48-b1926acf1d40'}
                            ]);