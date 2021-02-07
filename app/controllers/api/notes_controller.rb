class Api::NotesController < ApplicationController
  before_action :set_note, only: [:show, :update, :destroy ] 
  
  def index
    render json: Note.all
  end

  def show
    render json: @note
  end

  def create
    note = current_user.note.new(note_params)
    if note.save
      render json: note
    else
      render json: note.errors, status: 422
    end
  end

  def update
    note = current_user.note.update(note_params)
    if note.save
      render json: @note
    else
      render json: @note.errors, status: 422
    end
  end

  def destroy
    @note.destroy
  end

  private

  def set_note
    @note = Note.find(params[:id])
  end
  def set_user
    @user = User.find(params[:id])
  end
  def note_params
    params.require(:note).permit(:name, :body, :user_id )
  end
end
