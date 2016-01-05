json.array!(@games) do |game|
  json.extract! game, :id, :name, :rating
  json.url game_url(game, format: :json)
end
