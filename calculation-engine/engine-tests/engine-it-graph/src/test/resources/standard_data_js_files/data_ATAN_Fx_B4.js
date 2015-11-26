var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '92324f85-7838-4fb2-a4aa-28b28ea5eb7c', label: 'VALUE\n1.0', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: 1.0<br>Type: CONSTANT_VALUE<br>Id: 92324f85-7838-4fb2-a4aa-28b28ea5eb7c<br>Formula Expression: Formula String: VALUE; Formula Values: 1.0; Formula Ptg: 1.0; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@bae7dc0'},
{id: '841c2492-76d0-4ace-b733-68398325d342', label: '*\n141.3716694115407', color: '#f0ad4e', title: 'Name: *<br>Alias: null<br>Value: 141.3716694115407<br>Type: OPERATOR<br>Id: 841c2492-76d0-4ace-b733-68398325d342<br>Formula Expression: Formula String: ATAN(VALUE) * VALUE; Formula Values: ATAN(1.0) * 180.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@bae7dc0'},
{id: '8553adc9-1ccc-42ea-8bbd-0622f05a3099', label: 'ATAN\n0.7853981633974483', color: '#f0ad4e', title: 'Name: ATAN<br>Alias: null<br>Value: 0.7853981633974483<br>Type: FUNCTION<br>Id: 8553adc9-1ccc-42ea-8bbd-0622f05a3099<br>Formula Expression: Formula String: ATAN(VALUE); Formula Values: ATAN(1.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@bae7dc0'},
{id: '01e816f5-31fe-4b49-ac33-0222fa0089b9', label: 'B4\n45.0', color: '#31b0d5', title: 'Name: B4<br>Alias: null<br>Value: 45.0<br>Type: CELL_WITH_FORMULA<br>Id: 01e816f5-31fe-4b49-ac33-0222fa0089b9<br>Formula Expression: Formula String: ATAN(VALUE) * VALUE / PI(); Formula Values: ATAN(1.0) * 180.0 / PI(); Formula Ptg: 1.0 ATAN  180.0 *  PI  /; Ptgs: VALUE ATAN  VALUE *  PI  / Index in Ptgs: 5 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@bae7dc0'},
{id: '8c39023f-3adf-439e-b886-39048b9a9466', label: 'VALUE\n180.0', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: 180.0<br>Type: CONSTANT_VALUE<br>Id: 8c39023f-3adf-439e-b886-39048b9a9466<br>Formula Expression: Formula String: VALUE; Formula Values: 180.0; Formula Ptg: 180.0; Ptgs: VALUE Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@bae7dc0'},
{id: '7da78e56-2369-44a5-a0ae-92bdb3365497', label: '/\n45.0', color: '#f0ad4e', title: 'Name: /<br>Alias: null<br>Value: 45.0<br>Type: OPERATOR<br>Id: 7da78e56-2369-44a5-a0ae-92bdb3365497<br>Formula Expression: Formula String: ATAN(VALUE) * VALUE / PI(); Formula Values: ATAN(1.0) * 180.0 / PI(); Formula Ptg: ; Ptgs:  Index in Ptgs: 5 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@bae7dc0'},
{id: '7456e2bb-c05e-4917-8bae-b260891fbd19', label: 'PI\n3.141592653589793', color: '#f0ad4e', title: 'Name: PI<br>Alias: null<br>Value: 3.141592653589793<br>Type: FUNCTION<br>Id: 7456e2bb-c05e-4917-8bae-b260891fbd19<br>Formula Expression: Formula String: PI(); Formula Values: PI(); Formula Ptg: ; Ptgs:  Index in Ptgs: 4 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@bae7dc0'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '841c2492-76d0-4ace-b733-68398325d342', to: '7da78e56-2369-44a5-a0ae-92bdb3365497'},
{from: '7456e2bb-c05e-4917-8bae-b260891fbd19', to: '7da78e56-2369-44a5-a0ae-92bdb3365497'},
{from: '8553adc9-1ccc-42ea-8bbd-0622f05a3099', to: '841c2492-76d0-4ace-b733-68398325d342'},
{from: '92324f85-7838-4fb2-a4aa-28b28ea5eb7c', to: '8553adc9-1ccc-42ea-8bbd-0622f05a3099'},
{from: '7da78e56-2369-44a5-a0ae-92bdb3365497', to: '01e816f5-31fe-4b49-ac33-0222fa0089b9'},
{from: '8c39023f-3adf-439e-b886-39048b9a9466', to: '841c2492-76d0-4ace-b733-68398325d342'}
                            ]);