var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: 'c6177ed7-ca28-416b-b1d5-70f33d424824', label: 'D5\n4.0', color: '#31b0d5', title: 'Name: D5<br>Value: 4.0<br>Type: CELL_WITH_FORMULA<br>Id: c6177ed7-ca28-416b-b1d5-70f33d424824<br>Formula Expression: Formula String: HLOOKUP(VALUE, VALUE, A1:C4, VALUE); Formula Values: HLOOKUP(TRUE, 2.0, Alt, CTRL, Bolt, 4.0, 4.0, 9.0, 5.0, 7.0, 10.0, 6.0, 8.0, 11.0, Alt); Formula Ptg: TRUE, 2.0, Alt, CTRL, Bolt, 4.0, 4.0, 9.0, 5.0, 7.0, 10.0, 6.0, 8.0, 11.0, Alt HLOOKUP ; Ptgs: VALUE, VALUE, A1:C4, VALUE HLOOKUP  Index in Ptgs: 4 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@acb5508'},
{id: '9c805a50-33fc-4e03-b579-20f4626e0937', label: 'VALUE\n2.0', color: '#31b0d5', title: 'Name: VALUE<br>Value: 2.0<br>Type: CONSTANT_VALUE<br>Id: 9c805a50-33fc-4e03-b579-20f4626e0937<br>Formula Expression: Formula String: VALUE; Formula Values: 2.0; Formula Ptg: 2.0; Ptgs: VALUE Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@acb5508'},
{id: '0ba7e633-2934-4d96-a551-18086c7f2cad', label: 'VALUE\nTRUE', color: '#31b0d5', title: 'Name: VALUE<br>Value: TRUE<br>Type: CONSTANT_VALUE<br>Id: 0ba7e633-2934-4d96-a551-18086c7f2cad<br>Formula Expression: Formula String: VALUE; Formula Values: TRUE; Formula Ptg: TRUE; Ptgs: VALUE Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@acb5508'},
{id: 'fb38e7ad-1077-4f87-8dbf-8a3f42e2076b', label: 'VALUE\nAlt', color: '#31b0d5', title: 'Name: VALUE<br>Value: Alt<br>Type: CONSTANT_VALUE<br>Id: fb38e7ad-1077-4f87-8dbf-8a3f42e2076b<br>Formula Expression: Formula String: VALUE; Formula Values: Alt; Formula Ptg: Alt; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@acb5508'},
{id: '4dcd30d0-dbc2-4d06-8f40-d2d6eaa98692', label: 'A1:C4\n...', color: '#31b0d5', title: 'Name: A1:C4<br>Value: [[Alt, CTRL, Bolt], [4.0, 4.0, 9.0], [5.0, 7.0, 10.0], [6.0, 8.0, 11.0]]<br>Type: RANGE<br>Id: 4dcd30d0-dbc2-4d06-8f40-d2d6eaa98692<br>Formula Expression: Formula String: A1:C4; Formula Values: [[Alt, CTRL, Bolt], [4.0, 4.0, 9.0], [5.0, 7.0, 10.0], [6.0, 8.0, 11.0]]; Formula Ptg: [[Alt, CTRL, Bolt], [4.0, 4.0, 9.0], [5.0, 7.0, 10.0], [6.0, 8.0, 11.0]]; Ptgs: A1:C4 Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@acb5508'},
{id: '181e9f84-12ed-46a5-af3b-114faf381cf9', label: 'HLOOKUP\n4.0', color: '#f0ad4e', title: 'Name: HLOOKUP<br>Value: 4.0<br>Type: FUNCTION<br>Id: 181e9f84-12ed-46a5-af3b-114faf381cf9<br>Formula Expression: Formula String: HLOOKUP(VALUE, VALUE, A1:C4, VALUE); Formula Values: HLOOKUP(TRUE, 2.0, Alt, CTRL, Bolt, 4.0, 4.0, 9.0, 5.0, 7.0, 10.0, 6.0, 8.0, 11.0, Alt); Formula Ptg: ; Ptgs:  Index in Ptgs: 4 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@acb5508'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '181e9f84-12ed-46a5-af3b-114faf381cf9', to: 'c6177ed7-ca28-416b-b1d5-70f33d424824'},
{from: '0ba7e633-2934-4d96-a551-18086c7f2cad', to: '181e9f84-12ed-46a5-af3b-114faf381cf9'},
{from: 'fb38e7ad-1077-4f87-8dbf-8a3f42e2076b', to: '181e9f84-12ed-46a5-af3b-114faf381cf9'},
{from: '4dcd30d0-dbc2-4d06-8f40-d2d6eaa98692', to: '181e9f84-12ed-46a5-af3b-114faf381cf9'},
{from: '9c805a50-33fc-4e03-b579-20f4626e0937', to: '181e9f84-12ed-46a5-af3b-114faf381cf9'}
                            ]);