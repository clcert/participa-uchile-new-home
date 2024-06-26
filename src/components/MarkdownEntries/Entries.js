import React, { useCallback, useEffect, useState } from 'react';
import EntryItem from './EntryItem';

import loadingGif from '../../assets/images/loading.svg';

const Entries = ({ entriesFile, title }) => {

    const [markdownItems, setMarkdownItems] = useState([])
    const [loading, setLoading] = useState(true);

    const lang = "es";

    const getMarkdown = async (pathStr) => {
        const filePath = require(`../../markdown/${pathStr}`);
        const text = await fetch(filePath).then(response => response.text());
        return text;
    }

    const getEntries = useCallback(async () => {
        const { entries } = require('../../markdown/' + entriesFile);
        const filteredEntries = entries.filter((entry) => (entry.show))

        let listEntries = []

        for (let i = 0; i < filteredEntries.length; i++) {
            const text = await getMarkdown(filteredEntries[i].summaryFile);
            listEntries.push({
                'content': text,
                'date': filteredEntries[i].date,
                'file': filteredEntries[i].summaryFile,
                'img': filteredEntries[i].image !== undefined ?
                    require(`../../markdown/${filteredEntries[i].image}`)
                    :
                    undefined,
                'url': filteredEntries[i].route || undefined
            })
        }
        return listEntries.reverse()
    }, [entriesFile]);

    useEffect(() => {
        setLoading(true);
        setTimeout(async () => {
            getEntries().then((entries) => {
                setMarkdownItems(entries);
            }).catch(() => {
                setMarkdownItems([]);
            }).finally(() => {
                setLoading(false);
            })
        }, 300);
        return () => setMarkdownItems([]);
    }, [lang, getEntries])

    return (
        <div>
            {
                loading ?
                    <div className='container has-text-centered'>
                        <img src={loadingGif} alt='Cargando...' />
                    </div>
                    :
                    <div>
                        {
                            markdownItems.map((item) => (
                                <EntryItem item={item} key={item.file} />
                            ))
                        }
                    </div>
            }
        </div>
    )
}

export default Entries