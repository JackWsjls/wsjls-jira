import React from 'react';
import * as qs from 'qs'
import { useEffect, useState } from "react"
import { List } from "./list"
import { SearchPanel } from "./search-panel"
import { clearObject } from 'libs/utils';

export const ProjectListScreen = () => {
  const apiUrl = process.env.REACT_APP_API_URL
  const [param, setParam] = useState({
    name: '',
    personId: ''
  })
  const [users, setUsers] = useState([])
  const [list, setList] = useState([])

  useEffect(() => {
    fetch(`${apiUrl}/projects?${qs.stringify(clearObject(param))}`).then(async response => {
      if (response.ok) {
        setList(await response.json())
      }
    })
  }, [param, apiUrl])
  useEffect(() => {
    fetch(`${apiUrl}/users`).then(async response => {
      if (response.ok) {
        setUsers(await response.json())
      }
    })
  }, [apiUrl])
  return <div>
    <SearchPanel users={users} param={param} setParam={setParam}/>
    <List users={users} list={list} />
  </div>
}