var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '0b683fb9-f7c4-4d4a-a8be-d2cbf8f8320c', label: 'A1\n1.0', color: '#31b0d5', title: 'Name: A1<br>Value: 1.0<br>Type: CELL_WITH_VALUE<br>Id: 0b683fb9-f7c4-4d4a-a8be-d2cbf8f8320c<br>Formula Expression: Formula String: A1; Formula Values: 1.0; Formula Ptg: 1.0; Ptgs: A1 Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@129fed45'},
{id: 'f0bc402a-38d2-4f96-88e8-5895ff3dd638', label: 'D9\nFALSE', color: '#31b0d5', title: 'Name: D9<br>Value: FALSE<br>Type: CELL_WITH_FORMULA<br>Id: f0bc402a-38d2-4f96-88e8-5895ff3dd638<br>Formula Expression: Formula String: ISEVEN(A1); Formula Values: ISEVEN(1.0); Formula Ptg: 1.0 ISEVEN ; Ptgs: A1 ISEVEN  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@129fed45'},
{id: '62557ff1-d3ff-4d52-a07e-cc2e3bf280da', label: 'D7\nFALSE', color: '#31b0d5', title: 'Name: D7<br>Value: FALSE<br>Type: CELL_WITH_FORMULA<br>Id: 62557ff1-d3ff-4d52-a07e-cc2e3bf280da<br>Formula Expression: Formula String: ISEVEN(A1); Formula Values: ISEVEN(1.0); Formula Ptg: 1.0 ISEVEN ; Ptgs: A1 ISEVEN  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@129fed45'},
{id: '9bc491ec-619f-4bd3-9fbe-015094f25489', label: 'ISEVEN\nFALSE', color: '#f0ad4e', title: 'Name: ISEVEN<br>Value: FALSE<br>Type: FUNCTION<br>Id: 9bc491ec-619f-4bd3-9fbe-015094f25489<br>Formula Expression: Formula String: ISEVEN(A1); Formula Values: ISEVEN(1.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@129fed45'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '0b683fb9-f7c4-4d4a-a8be-d2cbf8f8320c', to: '9bc491ec-619f-4bd3-9fbe-015094f25489'},
{from: '62557ff1-d3ff-4d52-a07e-cc2e3bf280da', to: 'f0bc402a-38d2-4f96-88e8-5895ff3dd638'},
{from: '9bc491ec-619f-4bd3-9fbe-015094f25489', to: '62557ff1-d3ff-4d52-a07e-cc2e3bf280da'}
                            ]);