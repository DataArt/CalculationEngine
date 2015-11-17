var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '3683aa0b-60f9-441b-b23b-8b49766c30d0', label: 'VALUE\n3.0', color: '#31b0d5', title: 'Name: VALUE<br>Value: 3.0<br>Type: CONSTANT_VALUE<br>Id: 3683aa0b-60f9-441b-b23b-8b49766c30d0<br>Formula Expression: Formula String: VALUE; Formula Values: 3.0; Formula Ptg: 3.0; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@14ad42'},
{id: '2a539996-57a8-404e-84b8-c8c40cea2d8b', label: 'VALUE\n4.0', color: '#31b0d5', title: 'Name: VALUE<br>Value: 4.0<br>Type: CONSTANT_VALUE<br>Id: 2a539996-57a8-404e-84b8-c8c40cea2d8b<br>Formula Expression: Formula String: VALUE; Formula Values: 4.0; Formula Ptg: 4.0; Ptgs: VALUE Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@14ad42'},
{id: '1f3e8bf0-c8b1-44bc-910f-0a17e9277b54', label: 'D5\n$D$3', color: '#31b0d5', title: 'Name: D5<br>Value: $D$3<br>Type: CELL_WITH_FORMULA<br>Id: 1f3e8bf0-c8b1-44bc-910f-0a17e9277b54<br>Formula Expression: Formula String: ADDRESS(VALUE, VALUE); Formula Values: ADDRESS(4.0, 3.0); Formula Ptg: 4.0, 3.0 ADDRESS ; Ptgs: VALUE, VALUE ADDRESS  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@14ad42'},
{id: '9f54e3f4-da7f-45c8-a00f-7df3db75be42', label: 'ADDRESS\n$D$3', color: '#f0ad4e', title: 'Name: ADDRESS<br>Value: $D$3<br>Type: FUNCTION<br>Id: 9f54e3f4-da7f-45c8-a00f-7df3db75be42<br>Formula Expression: Formula String: ADDRESS(VALUE, VALUE); Formula Values: ADDRESS(4.0, 3.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@14ad42'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '2a539996-57a8-404e-84b8-c8c40cea2d8b', to: '9f54e3f4-da7f-45c8-a00f-7df3db75be42'},
{from: '9f54e3f4-da7f-45c8-a00f-7df3db75be42', to: '1f3e8bf0-c8b1-44bc-910f-0a17e9277b54'},
{from: '3683aa0b-60f9-441b-b23b-8b49766c30d0', to: '9f54e3f4-da7f-45c8-a00f-7df3db75be42'}
                            ]);