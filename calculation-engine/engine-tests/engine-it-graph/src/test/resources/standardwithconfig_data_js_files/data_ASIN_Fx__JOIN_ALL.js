var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: 'bead3103-5a3a-414a-852d-3a965e4f2318', label: 'E3\n1.5707963267948966', color: '#31b0d5', title: 'Name: E3<br>Value: 1.5707963267948966<br>Type: CELL_WITH_FORMULA<br>Id: bead3103-5a3a-414a-852d-3a965e4f2318<br>Formula Expression: Formula String: ASIN(A2); Formula Values: ASIN(1.0); Formula Ptg: 1.0 ASIN ; Ptgs: A2 ASIN  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@4803b726'},
{id: '10b9e558-357c-4cab-bd77-f21c8067bd60', label: 'C1\n-0.5235987755982989', color: '#31b0d5', title: 'Name: C1<br>Value: -0.5235987755982989<br>Type: CELL_WITH_FORMULA<br>Id: 10b9e558-357c-4cab-bd77-f21c8067bd60<br>Formula Expression: Formula String: ASIN(VALUE); Formula Values: ASIN(-0.5); Formula Ptg: -0.5 ASIN ; Ptgs: VALUE ASIN  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@4803b726'},
{id: '9046fac0-2b91-411a-b217-6d5fcf2c51d3', label: 'VALUE\n-0.5', color: '#31b0d5', title: 'Name: VALUE<br>Value: -0.5<br>Type: CONSTANT_VALUE<br>Id: 9046fac0-2b91-411a-b217-6d5fcf2c51d3<br>Formula Expression: Formula String: VALUE; Formula Values: -0.5; Formula Ptg: -0.5; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@4803b726'},
{id: '9eed0d6e-115e-4b9a-bece-c28f33e56985', label: 'ASIN\n-0.5235987755982989', color: '#f0ad4e', title: 'Name: ASIN<br>Value: -0.5235987755982989<br>Type: FUNCTION<br>Id: 9eed0d6e-115e-4b9a-bece-c28f33e56985<br>Formula Expression: Formula String: ASIN(VALUE); Formula Values: ASIN(-0.5); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@4803b726'},
{id: 'bbb1180f-5b2e-48d4-a471-7d4b06036ecb', label: 'A2\n1.0', color: '#31b0d5', title: 'Name: A2<br>Value: 1.0<br>Type: CELL_WITH_VALUE<br>Id: bbb1180f-5b2e-48d4-a471-7d4b06036ecb<br>Formula Expression: Formula String: A2; Formula Values: 1.0; Formula Ptg: 1.0; Ptgs: A2 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@4803b726'},
{id: 'b66d4529-4a9e-4a6e-be7a-4cb7fe7cedb6', label: 'ASIN\n1.5707963267948966', color: '#f0ad4e', title: 'Name: ASIN<br>Value: 1.5707963267948966<br>Type: FUNCTION<br>Id: b66d4529-4a9e-4a6e-be7a-4cb7fe7cedb6<br>Formula Expression: Formula String: ASIN(A2); Formula Values: ASIN(1.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@4803b726'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: 'b66d4529-4a9e-4a6e-be7a-4cb7fe7cedb6', to: 'bead3103-5a3a-414a-852d-3a965e4f2318'},
{from: '9046fac0-2b91-411a-b217-6d5fcf2c51d3', to: '9eed0d6e-115e-4b9a-bece-c28f33e56985'},
{from: 'bbb1180f-5b2e-48d4-a471-7d4b06036ecb', to: 'b66d4529-4a9e-4a6e-be7a-4cb7fe7cedb6'},
{from: '9eed0d6e-115e-4b9a-bece-c28f33e56985', to: '10b9e558-357c-4cab-bd77-f21c8067bd60'}
                            ]);