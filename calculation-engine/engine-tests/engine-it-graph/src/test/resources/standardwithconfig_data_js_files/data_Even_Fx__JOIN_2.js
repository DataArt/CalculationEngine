var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '76d64eec-d369-4e96-867a-a0f2830102f6', label: 'VALUE\n2.5', color: '#31b0d5', title: 'Name: VALUE<br>Value: 2.5<br>Type: CONSTANT_VALUE<br>Id: 76d64eec-d369-4e96-867a-a0f2830102f6<br>Formula Expression: Formula String: VALUE; Formula Values: 2.5; Formula Ptg: 2.5; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@729cd862'},
{id: 'fb1c95f6-bc72-4962-90c2-e9f885f2aabc', label: 'B3\n4.0', color: '#31b0d5', title: 'Name: B3<br>Value: 4.0<br>Type: CELL_WITH_FORMULA<br>Id: fb1c95f6-bc72-4962-90c2-e9f885f2aabc<br>Formula Expression: Formula String: EVEN(VALUE); Formula Values: EVEN(2.5); Formula Ptg: 2.5 EVEN ; Ptgs: VALUE EVEN  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@729cd862'},
{id: '7823cc81-b0cc-4f79-902b-b58b183a9629', label: 'B2\n2.0', color: '#31b0d5', title: 'Name: B2<br>Value: 2.0<br>Type: CELL_WITH_FORMULA<br>Id: 7823cc81-b0cc-4f79-902b-b58b183a9629<br>Formula Expression: Formula String: EVEN(VALUE); Formula Values: EVEN(1.5); Formula Ptg: 1.5 EVEN ; Ptgs: VALUE EVEN  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@729cd862'},
{id: '1506f46f-4ef6-4a94-b2fe-6cb566e12497', label: 'VALUE\n1.5', color: '#31b0d5', title: 'Name: VALUE<br>Value: 1.5<br>Type: CONSTANT_VALUE<br>Id: 1506f46f-4ef6-4a94-b2fe-6cb566e12497<br>Formula Expression: Formula String: VALUE; Formula Values: 1.5; Formula Ptg: 1.5; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@729cd862'},
{id: 'a3f5864b-8e85-4a3b-81ff-aad43edee47d', label: 'EVEN\n2.0', color: '#f0ad4e', title: 'Name: EVEN<br>Value: 2.0<br>Type: FUNCTION<br>Id: a3f5864b-8e85-4a3b-81ff-aad43edee47d<br>Formula Expression: Formula String: EVEN(VALUE); Formula Values: EVEN(1.5); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@729cd862'},
{id: 'cf943f60-57b6-4468-a155-4078f703baec', label: 'EVEN\n4.0', color: '#f0ad4e', title: 'Name: EVEN<br>Value: 4.0<br>Type: FUNCTION<br>Id: cf943f60-57b6-4468-a155-4078f703baec<br>Formula Expression: Formula String: EVEN(VALUE); Formula Values: EVEN(2.5); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@729cd862'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: 'cf943f60-57b6-4468-a155-4078f703baec', to: 'fb1c95f6-bc72-4962-90c2-e9f885f2aabc'},
{from: 'a3f5864b-8e85-4a3b-81ff-aad43edee47d', to: '7823cc81-b0cc-4f79-902b-b58b183a9629'},
{from: '76d64eec-d369-4e96-867a-a0f2830102f6', to: 'cf943f60-57b6-4468-a155-4078f703baec'},
{from: '1506f46f-4ef6-4a94-b2fe-6cb566e12497', to: 'a3f5864b-8e85-4a3b-81ff-aad43edee47d'}
                            ]);