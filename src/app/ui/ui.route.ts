import { UiComponent } from './ui.component';
import { ChartComponent } from './chart/chart.component';
import { FormComponent } from './form/form.component';
import { TableComponent } from './table/table.component';
import { WidgetComponent } from './widget/widget.component';
import { UiElementComponent } from './ui-element/ui-element.component';


export const uiRoutes = [{
  path: '',
  component:UiComponent,
  children: [
    { path: '', redirectTo: 'uiElement', pathMatch: 'full' },
    { path: 'chart', component: ChartComponent },
    { path: 'form', component: FormComponent },
    { path: 'table', component: TableComponent },
    { path: 'widget', component: WidgetComponent },
    { path: 'uiElement', component: UiElementComponent },
   ]
}];
