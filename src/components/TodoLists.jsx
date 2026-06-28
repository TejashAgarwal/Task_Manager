import React from 'react'
import TodoItem from './TodoItems'
import { Sparkles } from 'lucide-react';

const TodoLists = ({
  todos, 
  onStartEdit,
  onSaveEdit, 
  onCancelEdit, 
  editingId, 
  editText, 
  onEditTextChange, 
  onEditKeyPress, 
  onToggle,
  onDelete}) => {

  if (todos.length === 0){
    return(
      <div className='text-center py-16 backdrop-blur-2xl bg-white/5 rounded-2xl border border-white/10'>
        <div className='w-16 h-16 bg-linear-to-br from-violet-500/20 to-fuchsia-500/20 rounded-2xl flex items-center justify-center mx-auto mb-3'>
          <Sparkles size={32} className='text-violet-300'/>
        </div>
        <p className='text-white/90 text-base font-semibold mb-1'>
          No tasks yet
        </p>
        <p className='text-white/50 text-sm'>
          Create your first task to get started
        </p>
      </div>
    )
  }

  return (
    <>
      <div className='space-y-2'>
        {todos.map((todo, index) => (
          <TodoItem key={todo.id}
            todo={todo}
            index={index}
            editingId={editingId}
            editText={editText}
            onToggle={onToggle}
            onStartEdit={onStartEdit}
            onSaveEdit={onSaveEdit}
            onCancelEdit={onCancelEdit}
            onDelete={onDelete}
            onEditTextChange={onEditTextChange}
            onEditKeyPress={onEditKeyPress}
          />
        ))}
      </div>
    </>
  )
}

export default TodoLists