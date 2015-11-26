var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '24b1aff3-47bc-43ee-b9f3-ecdefd83c0fb', label: 'VALUE\n8.0', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: 8.0<br>Type: CONSTANT_VALUE<br>Id: 24b1aff3-47bc-43ee-b9f3-ecdefd83c0fb<br>Formula Expression: Formula String: VALUE; Formula Values: 8.0; Formula Ptg: 8.0; Ptgs: VALUE Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@7a527389'},
{id: '36fd116d-ec7b-428c-a897-7e664b2f299f', label: 'VALUE\n6.0', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: 6.0<br>Type: CONSTANT_VALUE<br>Id: 36fd116d-ec7b-428c-a897-7e664b2f299f<br>Formula Expression: Formula String: VALUE; Formula Values: 6.0; Formula Ptg: 6.0; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@7a527389'},
{id: '0f360ac5-5096-4138-aeea-fac23ef23021', label: 'A1\n#NUM!', color: '#31b0d5', title: 'Name: A1<br>Alias: null<br>Value: #NUM!<br>Type: CELL_WITH_FORMULA<br>Id: 0f360ac5-5096-4138-aeea-fac23ef23021<br>Formula Expression: Formula String: COMBIN(VALUE, VALUE); Formula Values: COMBIN(8.0, 6.0); Formula Ptg: 8.0, 6.0 COMBIN ; Ptgs: VALUE, VALUE COMBIN  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@7a527389'},
{id: '4a838130-fa22-4dd2-9bd4-f1a80f0f3dce', label: 'COMBIN\n#NUM!', color: '#f0ad4e', title: 'Name: COMBIN<br>Alias: null<br>Value: #NUM!<br>Type: FUNCTION<br>Id: 4a838130-fa22-4dd2-9bd4-f1a80f0f3dce<br>Formula Expression: Formula String: COMBIN(VALUE, VALUE); Formula Values: COMBIN(8.0, 6.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@7a527389'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '24b1aff3-47bc-43ee-b9f3-ecdefd83c0fb', to: '4a838130-fa22-4dd2-9bd4-f1a80f0f3dce'},
{from: '4a838130-fa22-4dd2-9bd4-f1a80f0f3dce', to: '0f360ac5-5096-4138-aeea-fac23ef23021'},
{from: '36fd116d-ec7b-428c-a897-7e664b2f299f', to: '4a838130-fa22-4dd2-9bd4-f1a80f0f3dce'}
                            ]);