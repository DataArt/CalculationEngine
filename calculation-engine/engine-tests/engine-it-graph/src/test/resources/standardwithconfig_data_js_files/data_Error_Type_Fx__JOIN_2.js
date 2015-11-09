var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '64fee324-3064-4098-afbb-1f1a1f541e2a', label: 'VALUE\n#N/A', color: '#31b0d5', title: 'Name: VALUE<br>Value: #N/A<br>Type: CONSTANT_VALUE<br>Id: 64fee324-3064-4098-afbb-1f1a1f541e2a<br>Formula Expression: Formula String: VALUE; Formula Values: #N/A; Formula Ptg: #N/A; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@675ec28b'},
{id: 'b29fe3b4-7ba0-47e0-a8ca-9ab0f4505643', label: 'A2\n#DIV/0!', color: '#31b0d5', title: 'Name: A2<br>Value: #DIV/0!<br>Type: CELL_WITH_VALUE<br>Id: b29fe3b4-7ba0-47e0-a8ca-9ab0f4505643<br>Formula Expression: Formula String: A2; Formula Values: #DIV/0!; Formula Ptg: #DIV/0!; Ptgs: A2 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@675ec28b'},
{id: '541a8b70-8f13-40df-be27-231c54e244cc', label: 'ERROR.TYPE\n2.0', color: '#f0ad4e', title: 'Name: ERROR.TYPE<br>Value: 2.0<br>Type: FUNCTION<br>Id: 541a8b70-8f13-40df-be27-231c54e244cc<br>Formula Expression: Formula String: ERROR.TYPE(A2); Formula Values: ERROR.TYPE(#DIV/0!); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@675ec28b'},
{id: 'f85d4d33-9205-40d2-a75a-bacf8dd31c9e', label: 'B3\n7.0', color: '#31b0d5', title: 'Name: B3<br>Value: 7.0<br>Type: CELL_WITH_FORMULA<br>Id: f85d4d33-9205-40d2-a75a-bacf8dd31c9e<br>Formula Expression: Formula String: ERROR.TYPE(VALUE); Formula Values: ERROR.TYPE(#N/A); Formula Ptg: #N/A ERROR.TYPE ; Ptgs: VALUE ERROR.TYPE  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@675ec28b'},
{id: '31a5f6b4-cf2a-4754-8352-bc9adfe774d0', label: 'ERROR.TYPE\n7.0', color: '#f0ad4e', title: 'Name: ERROR.TYPE<br>Value: 7.0<br>Type: FUNCTION<br>Id: 31a5f6b4-cf2a-4754-8352-bc9adfe774d0<br>Formula Expression: Formula String: ERROR.TYPE(VALUE); Formula Values: ERROR.TYPE(#N/A); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@675ec28b'},
{id: '9d5e0e95-0bdc-4eaa-8398-f09b6de28101', label: 'C4\n2.0', color: '#31b0d5', title: 'Name: C4<br>Value: 2.0<br>Type: CELL_WITH_FORMULA<br>Id: 9d5e0e95-0bdc-4eaa-8398-f09b6de28101<br>Formula Expression: Formula String: ERROR.TYPE(A2); Formula Values: ERROR.TYPE(#DIV/0!); Formula Ptg: #DIV/0! ERROR.TYPE ; Ptgs: A2 ERROR.TYPE  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@675ec28b'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '31a5f6b4-cf2a-4754-8352-bc9adfe774d0', to: 'f85d4d33-9205-40d2-a75a-bacf8dd31c9e'},
{from: 'b29fe3b4-7ba0-47e0-a8ca-9ab0f4505643', to: '541a8b70-8f13-40df-be27-231c54e244cc'},
{from: '64fee324-3064-4098-afbb-1f1a1f541e2a', to: '31a5f6b4-cf2a-4754-8352-bc9adfe774d0'},
{from: '541a8b70-8f13-40df-be27-231c54e244cc', to: '9d5e0e95-0bdc-4eaa-8398-f09b6de28101'}
                            ]);