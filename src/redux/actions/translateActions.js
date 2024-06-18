import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { options } from "../../constant";


export const getLanguages = createAsyncThunk('translate/getLanguages', 

async () => {

    const res = await axios.request(options)

    return res.data.data.languages
})

export const translateText = createAsyncThunk(
    'translate/text', async ({text, sourceLang, targetLang}) => {

        const params = new URLSearchParams();
        params.set('source_language', sourceLang.value);
        params.set('target_language', targetLang.value);
        params.set('text', text);
        
        const options = {
          method: 'POST',
          url: 'https://text-translator2.p.rapidapi.com/translate',
          headers: {
            'content-type': 'application/x-www-form-urlencoded',
            'X-RapidAPI-Key': '2ee14f57d6mshd3977ce4e513e62p10f679jsn6fa1ca938602',
            'X-RapidAPI-Host': 'text-translator2.p.rapidapi.com'
          },
          data: params,
        };

        const res = await axios.request(options)
        
        return res.data.data.translatedText
    }
)