import { SiigoInput } from "@siigo-front/input-react";
import { SiigoBadge } from "@siigo-front/badge-react";
import { SiigoSelect } from "@siigo-front/select-react";
import { SiigoAutocomplete } from "@siigo-front/autocomplete-react";
import { useEffect, useState } from "react";
import { SiigoButton } from "@siigo-front/button-react";


export default function Root(props) {
  console.log(props);

  const [name, setName] = useState()
  const [password, setPassword] = useState()

  const handleChange = (event) => {
    console.log(event);
  };

  return <section>
    
    {props.name} is mounted! Hello
    <br />

    <SiigoInput
      label="Hello input siigo new feed"
    />
    <br />

    <SiigoBadge
        color="default" 
        content="content"
        size="s" 
    ></SiigoBadge>
      <br /> 

      <SiigoSelect
                             errorMessage="Error"
                             hint="Select multiselect separado por punto y coma"
                             label="Select multiselect separado por punto y coma"
                             multiSelect
                             multiSelectSemicolon
                             options={props.customProp.options}
                             size={8}
                             textAddItem="Add new item"
      ></SiigoSelect>
      <br /> 

      <SiigoAutocomplete
                  additionalFilter1=""
                  additionalFilter2=""
                  autocompleteApiUrl=""
                  browserCode={12}
                  configurationApiUrl=""
                  dropdownFooterActionText=""
                  hint="Autocomplete"
                  dropdownHeader=""
                  dropdownMaxItemsVisible={3}
                  dropdownPosition=""
                  errorMessage=""
                  isNormalDirectionDropDown
                  items={props.customProp.items}
                  label="Productos"
                  name=""
                  pattern=""
                  provider="local"
                  requiredMessage="Campo obligatorio"
                  templateValue=""
                  value=""
                />
      <br />

      <h4>Count - {props.customProp.count}</h4>

      <form action="">

        <h2>form Child</h2>

      <SiigoInput
        label="Name"
        required={true}
        onInput={(e) => {
          setName(e.target.value)
        }}
      ></SiigoInput>
      <br />
      <br />

      <SiigoInput
        label="password"
        required={true}
        onInput={(e) => {
          setPassword(e.target.value)
        }}
      >
      </SiigoInput>

      <br /><br />

      <SiigoButton
        text="Enviar datos a table"
        onClick={()=> {
          props.dataParcel({name, password})
        }}
      
      ></SiigoButton>


      <br /><br />

      
      </form>

      <button 
        onClick={()=>{
          props.unmountSelf()
        }}
      >
        Cerrar Parcel
      </button>
      
      <br />
    </section>;
}
