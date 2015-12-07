/*
Copyright 2015 DataArt Apps, Inc

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
package com.dataart.spreadsheetanalytics.model;

import java.util.Optional;

import com.dataart.spreadsheetanalytics.api.model.ICellAddress;
import com.dataart.spreadsheetanalytics.api.model.ICellValue;
import com.dataart.spreadsheetanalytics.api.model.IDmCell;

public class DmCell implements IDmCell {
    
    protected ICellAddress address;
    protected ICellValue content;
    protected Optional<ICellValue> value = Optional.empty();
    protected String alias;
    
    @Override public ICellAddress address() { return this.address; }
    public void address(ICellAddress address) { this.address = address; }
    
    @Override public ICellValue content() { return this.content; }
    public void content(ICellValue content) { this.content = content; }
    
    @Override public Optional<ICellValue> value() { return this.value; }
    public void value(Optional<ICellValue> value) { this.value = value; }
    
    @Override public String alias() { return this.alias; }
    public void alias(String alias) { this.alias = alias; }

}
