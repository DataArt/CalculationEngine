var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '5476f464-0746-4ba3-9c82-ec7167b750ea', label: 'E1:E4\n[[5.0], [7.0], [57.0], [46.0]]', color: '#31b0d5', title: 'Name: E1:E4<br>Value: [[5.0], [7.0], [57.0], [46.0]]<br>Type: RANGE<br>Id: 5476f464-0746-4ba3-9c82-ec7167b750ea<br>Formula Expression: Formula String: E1:E4; Formula Values: [[5.0], [7.0], [57.0], [46.0]]; Formula Ptg: [[5.0], [7.0], [57.0], [46.0]]; Ptgs: E1:E4 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@3ce3db41'},
{id: '3e615798-42db-45f5-b9ae-fe145be831eb', label: 'A1\n12.0', color: '#31b0d5', title: 'Name: A1<br>Value: 12.0<br>Type: CELL_WITH_FORMULA<br>Id: 3e615798-42db-45f5-b9ae-fe145be831eb<br>Formula Expression: Formula String: VALUE; Formula Values: 12.0; Formula Ptg: 12.0; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@3ce3db41'},
{id: '815bdfc0-419a-452c-83c5-cbb47caff6e4', label: 'E5\n115.0', color: '#31b0d5', title: 'Name: E5<br>Value: 115.0<br>Type: CELL_WITH_FORMULA<br>Id: 815bdfc0-419a-452c-83c5-cbb47caff6e4<br>Formula Expression: Formula String: SUM(E1:E4); Formula Values: SUM(5.0, 7.0, 57.0, 46.0); Formula Ptg: 5.0, 7.0, 57.0, 46.0 SUM ; Ptgs: E1:E4 SUM  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@3ce3db41'},
{id: '1c8451bb-327a-4afc-8e6f-cfe08dda66c0', label: 'SUM\n115.0', color: '#f0ad4e', title: 'Name: SUM<br>Value: 115.0<br>Type: FUNCTION<br>Id: 1c8451bb-327a-4afc-8e6f-cfe08dda66c0<br>Formula Expression: Formula String: SUM(E1:E4); Formula Values: SUM(5.0, 7.0, 57.0, 46.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@3ce3db41'},
{id: 'b3ec458f-8265-4be1-9272-781f2470ec54', label: 'VALUE\n12.0', color: '#31b0d5', title: 'Name: VALUE<br>Value: 12.0<br>Type: CONSTANT_VALUE<br>Id: b3ec458f-8265-4be1-9272-781f2470ec54<br>Formula Expression: Formula String: VALUE; Formula Values: 12.0; Formula Ptg: 12.0; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@3ce3db41'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '1c8451bb-327a-4afc-8e6f-cfe08dda66c0', to: '815bdfc0-419a-452c-83c5-cbb47caff6e4'},
{from: 'b3ec458f-8265-4be1-9272-781f2470ec54', to: '3e615798-42db-45f5-b9ae-fe145be831eb'},
{from: '5476f464-0746-4ba3-9c82-ec7167b750ea', to: '1c8451bb-327a-4afc-8e6f-cfe08dda66c0'}
                            ]);