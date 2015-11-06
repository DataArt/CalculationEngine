var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: 'cb555bc3-c7b4-4b69-b7a8-c929d12f401c', label: 'VALUE\n4.0', color: '#31b0d5', title: 'Name: VALUE<br>Value: 4.0<br>Type: CONSTANT_VALUE<br>Id: cb555bc3-c7b4-4b69-b7a8-c929d12f401c<br>Formula Expression: Formula String: VALUE; Formula Values: 4.0; Formula Ptg: 4.0; Ptgs: VALUE Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@421bba99'},
{id: '7fd0ec00-afef-4cfb-8963-c7f68b4ec246', label: 'VALUE\n9.0', color: '#31b0d5', title: 'Name: VALUE<br>Value: 9.0<br>Type: CONSTANT_VALUE<br>Id: 7fd0ec00-afef-4cfb-8963-c7f68b4ec246<br>Formula Expression: Formula String: VALUE; Formula Values: 9.0; Formula Ptg: 9.0; Ptgs: VALUE Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@421bba99'},
{id: 'e4d9865c-d5e0-4557-a4b7-bdd6be35b948', label: 'DATE\n42251.0', color: '#f0ad4e', title: 'Name: DATE<br>Value: 42251.0<br>Type: FUNCTION<br>Id: e4d9865c-d5e0-4557-a4b7-bdd6be35b948<br>Formula Expression: Formula String: DATE(VALUE, VALUE, VALUE); Formula Values: DATE(4.0, 9.0, 2015.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@421bba99'},
{id: 'd477ea1d-936f-438d-acd7-aa3270580e99', label: 'E8\n42251.0', color: '#31b0d5', title: 'Name: E8<br>Value: 42251.0<br>Type: CELL_WITH_FORMULA<br>Id: d477ea1d-936f-438d-acd7-aa3270580e99<br>Formula Expression: Formula String: DATE(VALUE, VALUE, VALUE); Formula Values: DATE(4.0, 9.0, 2015.0); Formula Ptg: 4.0, 9.0, 2015.0 DATE ; Ptgs: VALUE, VALUE, VALUE DATE  Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@421bba99'},
{id: '4efba552-6efe-441d-9308-69ab2cbcc289', label: 'VALUE\n2015.0', color: '#31b0d5', title: 'Name: VALUE<br>Value: 2015.0<br>Type: CONSTANT_VALUE<br>Id: 4efba552-6efe-441d-9308-69ab2cbcc289<br>Formula Expression: Formula String: VALUE; Formula Values: 2015.0; Formula Ptg: 2015.0; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@421bba99'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '4efba552-6efe-441d-9308-69ab2cbcc289', to: 'e4d9865c-d5e0-4557-a4b7-bdd6be35b948'},
{from: 'cb555bc3-c7b4-4b69-b7a8-c929d12f401c', to: 'e4d9865c-d5e0-4557-a4b7-bdd6be35b948'},
{from: '7fd0ec00-afef-4cfb-8963-c7f68b4ec246', to: 'e4d9865c-d5e0-4557-a4b7-bdd6be35b948'},
{from: 'e4d9865c-d5e0-4557-a4b7-bdd6be35b948', to: 'd477ea1d-936f-438d-acd7-aa3270580e99'}
                            ]);