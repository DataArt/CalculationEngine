var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '688be5fd-259c-4f20-bd63-316716efed37', label: 'D6\nFALSE', color: '#31b0d5', title: 'Name: D6<br>Alias: null<br>Value: FALSE<br>Type: CELL_WITH_FORMULA<br>Id: 688be5fd-259c-4f20-bd63-316716efed37<br>Formula Expression: Formula String: ISBLANK(VALUE); Formula Values: ISBLANK(#REF!); Formula Ptg: #REF! ISBLANK ; Ptgs: VALUE ISBLANK  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@2257fadf'},
{id: 'c0ec8651-b3b1-43c2-b256-38e0c20e2750', label: 'ISBLANK\nFALSE', color: '#f0ad4e', title: 'Name: ISBLANK<br>Alias: null<br>Value: FALSE<br>Type: FUNCTION<br>Id: c0ec8651-b3b1-43c2-b256-38e0c20e2750<br>Formula Expression: Formula String: ISBLANK(VALUE); Formula Values: ISBLANK(#REF!); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@2257fadf'},
{id: '0bf19662-8d18-43a5-b59c-0748aeab6c74', label: 'VALUE\n#REF!', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: #REF!<br>Type: CONSTANT_VALUE<br>Id: 0bf19662-8d18-43a5-b59c-0748aeab6c74<br>Formula Expression: Formula String: VALUE; Formula Values: #REF!; Formula Ptg: #REF!; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@2257fadf'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: 'c0ec8651-b3b1-43c2-b256-38e0c20e2750', to: '688be5fd-259c-4f20-bd63-316716efed37'},
{from: '0bf19662-8d18-43a5-b59c-0748aeab6c74', to: 'c0ec8651-b3b1-43c2-b256-38e0c20e2750'}
                            ]);